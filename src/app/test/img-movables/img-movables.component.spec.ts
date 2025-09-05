import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgMovablesComponent } from './img-movables.component';

describe('ImgMovablesComponent', () => {
  let component: ImgMovablesComponent;
  let fixture: ComponentFixture<ImgMovablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgMovablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgMovablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
