import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteinanceComponent } from './maintenance.component';

describe('ManteinanceComponent', () => {
  let component: ManteinanceComponent;
  let fixture: ComponentFixture<ManteinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManteinanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManteinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
