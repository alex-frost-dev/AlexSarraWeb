import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly LANG_KEY = 'app_language';
  readonly DEFAULT_LANG = 'es';

  constructor(private translate: TranslateService) {}

  setLanguage(lang: string) {
    localStorage.setItem(this.LANG_KEY, lang);
    this.translate.use(lang);
  }

  getLanguage(): string {
    return localStorage.getItem(this.LANG_KEY) || this.DEFAULT_LANG;
  }

  initLanguage() {
    const lang = this.getLanguage();
    //this.translate.setDefaultLang(this.DEFAULT_LANG);
    this.translate.use(this.DEFAULT_LANG);
  }
}