import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListPageComponent } from './pages/projects-list-page/projects-list-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { GalleryComponent } from '../shared/gallery/image-gallery/image-gallery.component';
import { ImageGalleryWindowComponent } from '../shared/gallery/image-gallery-window/image-gallery-window.component';
import { ProjectCardComponent } from '../shared/project-card/project-card.component';

@NgModule({
  declarations: [ProjectsListPageComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    TranslatePipe,
    TranslateDirective,
    GalleryComponent,
    ImageGalleryWindowComponent,
    ProjectCardComponent
  ]
})
export class ProjectsModule { }