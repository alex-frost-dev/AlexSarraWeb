import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsMainPageComponent } from './projects-main-page/projects-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsMainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
