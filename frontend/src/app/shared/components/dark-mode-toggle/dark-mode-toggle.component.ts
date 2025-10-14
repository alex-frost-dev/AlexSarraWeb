import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../../../core/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  imports: [CommonModule],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrl: './dark-mode-toggle.component.css',
  standalone: true,
})
export class DarkModeToggleComponent implements OnChanges {
  @Input() width!: number;
  @Input() height!: number;
  prefGap!: number;
  toggleTranslation = 'translateX(0px)';

  constructor(public darkModeService: DarkModeService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['width'] || changes['height']) {
      this.prefGap = this.width - this.height * 2;
      this.updateToggleTransform();
    }
  }

  updateToggleTransform() {
    const containerWidth = this.width; // Or however you want to define it
    const toggleWidth = this.height; // Or another calculation
    const pixels = containerWidth - toggleWidth;
    this.toggleTranslation = this.darkModeService.isDarkMode()
      ? 'translateX(0px)'
      : `translateX(${pixels}px)`;
  }

  // If you want to update on click or load:
  adjustToggle() {
    this.updateToggleTransform();
  }
}
