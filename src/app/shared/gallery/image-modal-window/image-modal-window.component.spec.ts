import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryWindowComponent } from './image-modal-window.component';

describe('ImageGalleryWindowComponent', () => {
  let component: ImageGalleryWindowComponent;
  let fixture: ComponentFixture<ImageGalleryWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGalleryWindowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageGalleryWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
