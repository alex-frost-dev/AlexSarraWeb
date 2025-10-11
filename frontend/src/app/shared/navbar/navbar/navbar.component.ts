import { Component, Inject } from '@angular/core';
import { DarkModeToggleComponent } from '../../dark-mode-toggle/dark-mode-toggle.component';
import { WindowSizeService } from '../../services/window-size/window-size.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language/language.service';
import { TranslatePipe } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { JsonLoaderService } from '../../services/jsonLoader/json-loader.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  imports: [
    DarkModeToggleComponent,
    CommonModule,
    TranslatePipe,
    NgbDropdownModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
})
export class NavbarComponent {
  resize$: Observable<string>;

  jsonNavbar!: any;
  language!: string;
  allLanguages!: { [key: string]: any };

  constructor(
    @Inject(LanguageService) private languageService: any,
    @Inject(JsonLoaderService) private jsonLoader: any,
    private http: HttpClient,
    private windowResizeService: WindowSizeService,
  ) {
    this.resize$ = windowResizeService.resize$;
    this.jsonLoader.getJson('languages').subscribe((json: any) => {
      this.allLanguages = json;
    });
  }

  getToggleWidth(size: any): number {
    switch (size) {
      case 'sm':
        return 35;
      default:
        return 80;
    }
  }

  getToggleHeight(size: any): number {
    switch (size) {
      case 'sm':
        return 15;
      default:
        return 30;
    }
  }

  getCurrentLanguage() {
    return this.languageService.getLanguage();
  }

  getLanguagesValues() {
    if (this.allLanguages) {
      return Object.values(this.allLanguages);
    }
    return null;
  }

  setLanguage(langValue: string) {
    const key = Object.keys(this.allLanguages).find(
      (k) => this.allLanguages[k] === langValue,
    );
    console.log(key, langValue);
    this.languageService.setLanguage(key, langValue);
  }
}
