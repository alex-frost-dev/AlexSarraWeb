import { Component, Inject, Input } from '@angular/core';
import {
  TranslateDirective,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';
import { LanguageService } from '../language/language.service';
import { GalleryComponent } from '../gallery/image-gallery/image-gallery.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ImageGalleryWindowComponent } from '../gallery/image-gallery-window/image-gallery-window.component';
import { waitForAsync } from '@angular/core/testing';
import { DarkModeService } from '../services/dark-mode/dark-mode.service';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  imports: [TranslatePipe, GalleryComponent, CommonModule],
  standalone: true,
})
export class ProjectCardComponent {
  @Input() projectName!: string;

  jsonProject!: any;
  labels!: any;
  language!: string;
  projectPrefix: string = 'projects';
  defaultsPrefix: string = this.projectPrefix + '.defaults';

  images!: string[];
  previewImage!: string;

  constructor(
    @Inject(LanguageService) private lang: any,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private http: HttpClient,
    private dialog: MatDialog,
    public darkModeService: DarkModeService,
  ) {}

  ngOnInit() {
    this.projectPrefix += '.' + this.projectName;
    this.language = this.lang.getLanguage();
    this.http
      .get<any>('../../../assets/i18n/' + this.language + '.json')
      .subscribe((json) => {
        this.jsonProject = json['projects'][this.projectName];
        this.labels = json['projects']['defaults'];
        this.images = this.jsonProject['images'];
        this.previewImage = this.images[0];
      });
    waitForAsync;

    // const json = await firstValueFrom(this.http.get<any>(`../../../assets/i18n/${this.language}.json`));
    // this.jsonProject = json["projects"][this.projectName];
    // this.labels = json["projects"]["defaults"];
    // this.images = this.jsonProject["images"];
    // this.previewImage = this.images[0];
    // console.log("done load.");
  }

  doJsonKeyExists(key: string) {
    return this.jsonProject[key] != '';
  }

  openPreviewedImage() {
    this.dialog.open(ImageGalleryWindowComponent, {
      data: {
        src: this.previewImage,
        images: this.images,
      },
    });
  }

  handleClickedImage(newImage: any) {
    this.previewImage = newImage;
  }
}
