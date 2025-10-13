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
    path: '**',
    redirectTo: 'maintenance',
  },
];
