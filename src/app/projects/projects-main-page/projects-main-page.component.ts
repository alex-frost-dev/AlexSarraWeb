import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../shared/language/language.service';

@Component({
  selector: 'app-projects-main-page',
  templateUrl: './projects-main-page.component.html',
  styleUrls: ['./projects-main-page.component.css'],
  standalone: false
})
export class ProjectsMainPageComponent {
  constructor(private languageService: LanguageService) { }
}