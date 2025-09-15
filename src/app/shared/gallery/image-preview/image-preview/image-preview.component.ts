import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
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
  public previousPreviewImage!: string | null;
  public imagesQueue: string[] = [];
  private _currentPreviewImage!: string | null;

  @Input() images!: string[];
  @Input() isInverted!: boolean;
  @Input()
  set currentPreviewImage(value: string) {
    // We use changes in a private variable because the public one is a trigger to push to imagesQueue
    this._currentPreviewImage = value;
    this.imagesQueue.push(value);
  }
  get currentPreviewImage(): string | null {
    return this._currentPreviewImage;
  }

  @ViewChild('img', { static: false }) img!: ElementRef<HTMLImageElement>;
  spanOverlayStyle: any = {};
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
        src: this._currentPreviewImage,
        images: this.images,
      },
    });
  }

  updateOverlay() {
    if (this.img?.nativeElement) {
      const rect = this.img.nativeElement.getBoundingClientRect();
      this.spanOverlayStyle = {
        position: 'absolute',
        left: this.img.nativeElement.offsetLeft + 'px',
        top: this.img.nativeElement.offsetTop + 'px',
        width: rect.width + 'px',
        height: rect.height + 'px',
        pointerEvents: 'none',
      };
    }
  }

  cleanPreviousImages() {
    if (this.imagesQueue.length > 1) {
      this.imagesQueue.shift();
    }
  }
}
