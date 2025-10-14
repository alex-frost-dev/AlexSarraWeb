import { Component, Input } from '@angular/core';

@Component({
  selector: 'hover-scaling-button',
  imports: [],
  styleUrl: './hover-scaling-button.component.css',
  template: `<button
    class="transition-transform hover:-translate-y-1 hover:scale-125"
  >
    {{ text }}
  </button>`,
})
export class HoverScalingButtonComponent {
  @Input() text!: string;
}
