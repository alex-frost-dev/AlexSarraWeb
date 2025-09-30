import { Component } from '@angular/core';
import { DarkModeService } from '../services/dark-mode/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dark-mode-toggle',
  imports: [CommonModule],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrl: './dark-mode-toggle.component.css',
  standalone: true,
})
export class DarkModeToggleComponent {
  constructor(public darkModeService: DarkModeService) {}

  toggleDarkMode() {}
}
