import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListPageComponent } from './projects-list-page/projects-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
