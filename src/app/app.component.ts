import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './shared/language/language.service';
import { DarkModeService } from './shared/services/dark-mode/dark-mode.service';

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
