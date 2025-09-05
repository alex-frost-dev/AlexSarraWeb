import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageGalleryWindowComponent } from '../image-gallery-window/image-gallery-window.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-image-gallery',
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})

export class GalleryComponent {

  startIndex = 0;
  endIndex = 0;
  @Input() images!: string[];
  @Input() maxNumItems!: number;
  arrowsNeeded: boolean = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.endIndex = this.maxNumItems;
    if (this.images.length > this.maxNumItems) {
        this.arrowsNeeded = true;
    }
  }

  get visibleImages() {
    return this.images.slice(this.startIndex, this.endIndex);
  }

  prev() {
    if (this.startIndex > 0) {
      this.startIndex--;
      this.endIndex--;
    }
  }

  next() {
    if (this.endIndex < this.images.length) {
      this.startIndex++;
      this.endIndex++;
    }
  }

  openImage(imgSrc: string) {
    this.dialog.open(ImageGalleryWindowComponent, {
      data: {
        src: imgSrc,
        images: this.images
      },
    });
  }
}