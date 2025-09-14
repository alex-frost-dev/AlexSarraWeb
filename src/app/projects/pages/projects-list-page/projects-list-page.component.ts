import { Component } from '@angular/core';
import { DarkModeService } from '../../../shared/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-projects-list-page',
  templateUrl: './projects-list-page.component.html',
  styleUrl: './projects-list-page.component.css',
  standalone: false,
})
export class ProjectsListPageComponent {
  constructor(public darkModeService: DarkModeService) {}
}
