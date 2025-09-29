import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalWindowComponent } from '../image-modal-window/image-modal-window.component';

@Component({
  selector: 'app-image-gallery',
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css',
})
export class GalleryComponent {
  startIndex = 0;
  endIndex = 0;
  @Input() images!: string[];
  @Input() maxNumItems!: number;
  @Input() screenSize!: string;
  arrowsNeeded: boolean = false;
  @Output() imageClicked = new EventEmitter<string>();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.endIndex = this.maxNumItems;
    if (this.images.length > this.maxNumItems) {
      this.arrowsNeeded = true;
    }
  }

  get visibleImages() {
    return this.images;
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

  sendImage(val: string) {
    // If there is no preview images (SMALL SCREEN), the image gallery images open the preview modal window directly
    if (this.screenSize == 'sm') {
      this.dialog.open(ImageModalWindowComponent, {
        data: {
          src: val,
          images: this.images,
        },
      });
    } else {
      // If there is a preview image (MEDIUM or more), they only emit and change the previewed image
      this.imageClicked.emit(val);
    }
  }

  getImageName(path: string) {
    return path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
  }
}
