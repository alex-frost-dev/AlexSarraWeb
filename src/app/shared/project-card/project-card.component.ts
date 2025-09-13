import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
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
import { ImageModalWindowComponent } from '../gallery/image-modal-window/image-modal-window.component';
import { waitForAsync } from '@angular/core/testing';
import { DarkModeService } from '../services/dark-mode/dark-mode.service';
import { ImagePreviewComponent } from '../gallery/image-preview/image-preview/image-preview.component';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  imports: [
    TranslatePipe,
    GalleryComponent,
    CommonModule,
    ImagePreviewComponent,
  ],
  standalone: true,
})
export class ProjectCardComponent {
  @Input() projectName!: string;
  @Input() isInverted!: boolean;
  @Output() previewedImage = new EventEmitter<string>();

  jsonProject!: any;
  labels!: any;
  language!: string;
  projectPrefix: string = 'projects';
  defaultsPrefix: string = this.projectPrefix + '.defaults';

  images!: string[];
  currentPreviewImage!: string;

  constructor(
    @Inject(LanguageService) private lang: any,
    private http: HttpClient,
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
        this.currentPreviewImage = this.images[0];
      });
    waitForAsync;
  }

  doJsonKeyExists(key: string) {
    return this.jsonProject[key] != '';
  }

  handleClickedImage(newImage: any) {
    this.currentPreviewImage = newImage;
  }
}
