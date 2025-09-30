import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../language/language.service';
import { GalleryComponent } from '../gallery/image-gallery/image-gallery.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { waitForAsync } from '@angular/core/testing';
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
  @Input() isInverted: boolean = false;
  @Output() previewedImage = new EventEmitter<string>();

  jsonProject!: any;
  labels!: any;
  language!: string;
  projectPrefix: string = 'projects';
  defaultsPrefix: string = this.projectPrefix + '.defaults';

  images!: string[];
  emptyImage: boolean = false;
  currentPreviewImage!: string;

  screenSize: string = 'lg';
  private resizeListener = () => this.detectScreenSize(); // Listener

  constructor(
    @Inject(LanguageService) private lang: any,
    private http: HttpClient,
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
        if (this.images.length > 0) {
          this.currentPreviewImage = this.images[0];
        } else {
          this.emptyImage = true;
        }
      });
    waitForAsync;

    this.detectScreenSize();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeListener);
  }

  doJsonKeyExists(key: string) {
    // Check for nested keys
    const keys = key.split('.');
    let obj = this.jsonProject;
    for (const key of keys) {
      if (!(key in obj)) {
        return false;
      }
      obj = obj[key];
    }
    return true;
  }

  handleClickedImage(newImage: any) {
    this.currentPreviewImage = newImage;
  }

  private detectScreenSize() {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      this.screenSize = 'xl';
    } else if (window.matchMedia('(min-width: 1024px)').matches) {
      this.screenSize = 'lg';
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      this.screenSize = 'md';
    } else if (window.matchMedia('(min-width: 640px)').matches) {
      this.screenSize = 'sm';
    } else {
      this.screenSize = 'sm';
    }
  }
}
