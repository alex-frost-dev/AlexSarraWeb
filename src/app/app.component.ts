import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './shared/language/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'alexsarraweb';
  
  constructor(private languageService: LanguageService) {
    this.languageService.initLanguage();
  }
}
