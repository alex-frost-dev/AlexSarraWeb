import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'maintenance',
    loadChildren: () =>
      import('./placeholders/maintenance/maintenance.module').then(
        (m) => m.ManteinanceModule,
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/pages/about-me/about-me.component').then(
        (c) => c.AboutMeComponent,
      ),
  },
  {
    path: '**',
    redirectTo: 'maintenance',
  },
];
