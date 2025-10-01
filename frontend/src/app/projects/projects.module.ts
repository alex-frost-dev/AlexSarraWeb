import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListPageComponent } from './pages/projects-list-page/projects-list-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { GalleryComponent } from '../shared/gallery/image-gallery/image-gallery.component';
import { ImageModalWindowComponent } from '../shared/gallery/image-modal-window/image-modal-window.component';
import { ProjectCardComponent } from '../shared/project-card/project-card.component';
import { NavbarComponent } from '../shared/navbar/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ProjectsListPageComponent }];

@NgModule({
  declarations: [ProjectsListPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ProjectsRoutingModule,
    TranslatePipe,
    TranslateDirective,
    GalleryComponent,
    ImageModalWindowComponent,
    ProjectCardComponent,
    NavbarComponent,
  ],
})
export class ProjectsModule {}
