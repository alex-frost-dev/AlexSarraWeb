import { Component } from '@angular/core';
import { DarkModeToggleComponent } from '../../dark-mode-toggle/dark-mode-toggle.component';

@Component({
  selector: 'app-navbar',
  imports: [DarkModeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
})
export class NavbarComponent {}
