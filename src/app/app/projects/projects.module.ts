import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsMainPageComponent } from './projects-main-page/projects-main-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@NgModule({
  declarations: [ProjectsMainPageComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    TranslatePipe,
    TranslateDirective
  ]
})
export class ProjectsModule { }

