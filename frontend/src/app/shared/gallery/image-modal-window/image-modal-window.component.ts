import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject, Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-gallery-window',
  imports: [CommonModule],
  templateUrl: './image-modal-window.component.html',
  styleUrl: './image-modal-window.component.css',
})
export class ImageModalWindowComponent {
  @HostListener('window:keydown', ['$event'])
  handleGlobalKeyDown(event: KeyboardEvent) {
    if (event.key == 'ArrowLeft') {
      this.prev();
    } else if (event.key == 'ArrowRight') {
      this.next();
    }
  }

  startIndex = 0;
  endIndex = 0;
  images: String[];
  currentSrcIndex!: number;
  canClose = true;

  constructor(
    public dialogRef: MatDialogRef<ImageModalWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { src: any; images: String[] },
    private elementRef: ElementRef,
  ) {
    this.images = data.images;
    this.endIndex = this.images.length - 1;
    this.currentSrcIndex = this.images.findIndex(
      (img) => img === this.data.src,
    );
  }

  ngOnInit() {}

  prev() {
    if (this.startIndex < this.currentSrcIndex) {
      this.currentSrcIndex--;
    }
  }

  next() {
    if (this.currentSrcIndex < this.endIndex) {
      this.currentSrcIndex++;
    }
  }

  close() {
    if (this.canClose) {
      this.dialogRef.close();
    }
  }
}
