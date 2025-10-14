import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModalWindowComponent } from '../../image-modal-window/image-modal-window.component';
import { MatDialog } from '@angular/material/dialog';
import { DarkModeService } from '../../../../core/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-image-preview',
  imports: [CommonModule],
  templateUrl: './image-preview.component.html',
  styleUrl: './image-preview.component.css',
  standalone: true,
})
export class ImagePreviewComponent {
  public previousPreviewImage!: string | null;
  private _currentPreviewImage!: string | null;

  @Input() images!: string[];
  @Input() isInverted!: boolean;
  @Input()
  set currentPreviewImage(value: string) {
    this.previousPreviewImage = this._currentPreviewImage;
    this._currentPreviewImage = value;
    // console.log('Current:', this._currentPreviewImage);
    // console.log('Previous:', this.previousPreviewImage);
  }
  get currentPreviewImage(): string | null {
    return this._currentPreviewImage;
  }

  @ViewChild('img', { static: false }) img!: ElementRef<HTMLImageElement>;
  @ViewChildren('magnIcon') magnIcons!: QueryList<ElementRef<HTMLImageElement>>;
  magnIcon!: ElementRef<HTMLImageElement>;
  spanOverlayStyle: any = {};
  resizeListener: any;

  isHovered = false;

  constructor(
    @Inject(DarkModeService) private darkModeService: any,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    // Images could delay a little between page load and the parent's json call response.
    if (this.images) {
      this.currentPreviewImage = this.images[0];
    }
    // Initialize resize Listener
    this.resizeListener = () => {
      this.updateOverlay(this.currentPreviewImage!);
    };
  }

  ngAfterViewInit() {
    // Listen for window resize
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

  updateOverlay(imageStr: string) {
    if (imageStr === this.currentPreviewImage) {
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
  }

  isDarkMode(): boolean {
    return this.darkModeService.isDarkMode();
  }
}
