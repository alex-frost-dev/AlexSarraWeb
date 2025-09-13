import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListPageComponent } from './pages/projects-list-page/projects-list-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { GalleryComponent } from '../shared/gallery/image-gallery/image-gallery.component';
import { ImageModalWindowComponent } from '../shared/gallery/image-modal-window/image-modal-window.component';
import { ProjectCardComponent } from '../shared/project-card/project-card.component';

@NgModule({
  declarations: [ProjectsListPageComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    TranslatePipe,
    TranslateDirective,
    GalleryComponent,
    ImageModalWindowComponent,
    ProjectCardComponent,
  ],
})
export class ProjectsModule {}
