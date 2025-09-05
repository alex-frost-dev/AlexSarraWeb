import { Component, Inject, Input } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../language/language.service';
import { GalleryComponent } from '../gallery/image-gallery/image-gallery.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  imports: [
    TranslatePipe,
    GalleryComponent,
    CommonModule
  ],
  standalone: true
})
export class ProjectCardComponent {

  @Input() projectName!: string;

  jsonProject!: any;
  labels!: any;
  language!: string
  projectPrefix: string = 'projects';
  defaultsPrefix: string = this.projectPrefix + '.defaults';

  constructor(@Inject(LanguageService) private lang: any, private languageService: LanguageService, private translateService: TranslateService, private http: HttpClient) { }

  ngOnInit() {
    this.projectPrefix += "." + this.projectName;
    this.language = this.lang.getLanguage();
    this.http.get<any>('../../../assets/i18n/' + this.language + '.json').subscribe(json => {
      this.jsonProject = json["projects"][this.projectName];
      this.labels = json["projects"]["defaults"];
    });
  }

  doJsonKeyExists(key: string) {
    return this.jsonProject[key] != undefined;
  }
}