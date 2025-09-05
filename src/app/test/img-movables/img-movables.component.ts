import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-img-movables',
  imports: [CommonModule],
  templateUrl: './img-movables.component.html',
  styleUrl: './img-movables.component.css'
})
export class ImgMovablesComponent {
  // Each image has its own src and movement state (x/y)
  images = [
    { src: 'assets/image1.jpg', x: 0, y: 0 },
    { src: 'assets/image2.jpg', x: 0, y: 0 },
    { src: 'assets/image3.jpg', x: 0, y: 0 },
    // ...add more images as needed
  ];

  // Move a specific image (by index)
  moveImage(index: number, dx: number, dy: number) {
    this.images[index].x += dx;
    this.images[index].y += dy;
  }
}
