import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMainPageComponent } from './projects-main-page.component';

describe('ProjectsMainPageComponent', () => {
  let component: ProjectsMainPageComponent;
  let fixture: ComponentFixture<ProjectsMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
