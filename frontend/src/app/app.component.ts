import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from './core/services/dark-mode/dark-mode.service';
import { LanguageService } from './core/services/language/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'alexsarraweb';

  constructor(
    private languageService: LanguageService,
    public darkMode: DarkModeService,
  ) {
    this.languageService.initLanguage();
  }
}
