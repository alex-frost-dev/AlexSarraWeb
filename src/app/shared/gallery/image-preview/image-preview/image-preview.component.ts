import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModalWindowComponent } from '../../image-modal-window/image-modal-window.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-image-preview',
  imports: [CommonModule],
  templateUrl: './image-preview.component.html',
  styleUrl: './image-preview.component.css',
  standalone: true,
})
export class ImagePreviewComponent {
  @Input() images!: string[];
  @Input() currentPreviewImage!: string;

  @ViewChild('img', { static: false }) img!: ElementRef<HTMLImageElement>;
  overlayStyle: any = {};
  resizeListener: any;

  isHovered = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    // Images could delay a little between page load and the parent's json call response.
    if (this.images) {
      this.currentPreviewImage = this.images[0];
    }
  }

  ngAfterViewInit() {
    // Initial calculation
    this.updateOverlay();
    // Listen for window resize
    this.resizeListener = () => this.updateOverlay();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeListener);
  }

  openPreviewedImage() {
    this.dialog.open(ImageModalWindowComponent, {
      data: {
        src: this.currentPreviewImage,
        images: this.images,
      },
    });
  }

  updateOverlay() {
    if (this.img?.nativeElement) {
      const rect = this.img.nativeElement.getBoundingClientRect();
      this.overlayStyle = {
        position: 'absolute',
        left: this.img.nativeElement.offsetLeft + 'px',
        top: this.img.nativeElement.offsetTop + 'px',
        width: rect.width + 'px',
        height: rect.height + 'px',
        pointerEvents: 'none',
      };
    }
  }
}
