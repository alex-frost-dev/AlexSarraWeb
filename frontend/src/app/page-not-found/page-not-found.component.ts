import { Component, Inject } from '@angular/core';
import { WindowSizeService } from '../core/services/window-size/window-size.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
  standalone: false,
})
export class PageNotFoundComponent {
  jsonPrefix: string = '404';

  constructor(private windowService: WindowSizeService) {}

  isDevice(askedSize: string) {
    if (this.windowService.detectScreenSize() == askedSize) {
      return true;
    }
    return false;
  }
}
