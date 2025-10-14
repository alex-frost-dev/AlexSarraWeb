import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root',
})
export class JsonLoaderService {
  constructor(
    private http: HttpClient,
    private languageService: LanguageService,
  ) {
    console.log('[JSON] JSON Loader Service started successfully.');
  }

  getJson(jsonPath: string): Observable<any> {
    let language = this.languageService.getLanguage();
    var jsonKeys = this.extractJson(jsonPath);
    return this.http.get<any>(`../../../assets/i18n/${language}.json`).pipe(
      map((json) => {
        for (const key of jsonKeys) {
          if (key in json) {
            json = json[key];
          }
        }
        console.log(`[${language}: JSON] Loaded JSON obj ${jsonPath}`);
        return json;
      }),
    );
  }

  extractJson(jsonPath: string) {
    return jsonPath.split('.');
  }
}
