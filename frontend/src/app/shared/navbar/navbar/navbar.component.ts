import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
})
export class NavbarComponent {
  constructor(public darkModeService: DarkModeService) {}

  toggleDarkMode() {}
}
