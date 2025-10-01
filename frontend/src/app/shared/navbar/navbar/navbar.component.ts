import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DarkModeToggleComponent } from '../../dark-mode-toggle/dark-mode-toggle.component';
import { WindowSizeService } from '../../services/window-size/window-size.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [DarkModeToggleComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
})
export class NavbarComponent {
  resize$: Observable<string>;

  constructor(private windowResizeService: WindowSizeService) {
    this.resize$ = windowResizeService.resize$;
  }

  getScreenSizeString(size: any): number {
    console.log('Component received:', size);
    switch (size) {
      case 'sm':
        return 50;
      default:
        return 500;
    }
  }
}
