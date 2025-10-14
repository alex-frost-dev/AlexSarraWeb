import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListPageComponent } from './projects-list-page/projects-list-page.component';
import { GalleryComponent } from '../../shared/components/image-gallery/image-gallery.component';
import { ImageModalWindowComponent } from '../../shared/components/image-modal-window/image-modal-window.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar/navbar.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

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
