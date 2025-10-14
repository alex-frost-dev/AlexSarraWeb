import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverScalingButtonComponent } from './hover-scaling-button.component';

describe('HoverScalingButtonComponent', () => {
  let component: HoverScalingButtonComponent;
  let fixture: ComponentFixture<HoverScalingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverScalingButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverScalingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
