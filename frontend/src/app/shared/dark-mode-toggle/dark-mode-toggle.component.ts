import { Component, Input, SimpleChanges } from '@angular/core';
import { DarkModeService } from '../services/dark-mode/dark-mode.service';
import { CommonModule } from '@angular/common';

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

  toggleElem!: HTMLImageElement;
  parentContainer!: HTMLDivElement;
  container!: HTMLDivElement;
  leftElem!: HTMLImageElement;
  rightElem!: HTMLImageElement;

  constructor(public darkModeService: DarkModeService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['width'] || changes['height']) {
      this.prefGap = this.width - this.height * 2;
    }
  }

  ngOnInit() {
    // Elements selection
    this.toggleElem = document.querySelector(
      '.toggle-switch',
    ) as HTMLImageElement;
    this.parentContainer = document.querySelector(
      '.parent-toggle-container',
    ) as HTMLDivElement;
    this.container = document.querySelector(
      '.toggle-container',
    ) as HTMLDivElement;
    this.leftElem = document.querySelector('.left-image') as HTMLImageElement;
    this.rightElem = document.querySelector('.right-image') as HTMLImageElement;

    // Gap calculation
    this.prefGap = this.width - this.height * 2;

    this.parentContainer.style.height = this.height + 'px';
    this.container.style.height = this.height + 'px';
    this.toggleElem.style.height = this.height + 'px';

    this.container.style.gap = this.prefGap + 'px';
    this.leftElem.style.height = this.height + 'px';
    this.leftElem.style.width = this.height + 'px'; // <---
    this.rightElem.style.height = this.height + 'px';
    this.rightElem.style.width = this.height + 'px';
  }

  adjustToggle() {
    let toggleWidth = parseInt(
      window.getComputedStyle(this.toggleElem).width.replace('px', ''),
    );

    let containerWidth = parseInt(
      window.getComputedStyle(this.container).width.replace('px', ''),
    );

    var pixels = containerWidth - toggleWidth;

    if (this.darkModeService.isDarkMode()) {
      // Slide left
      this.toggleElem.style.transform = 'translateX(0px)';
    } else {
      // Slide right
      this.toggleElem.style.transform = 'translateX(' + pixels + 'px)';
    }
  }
}
