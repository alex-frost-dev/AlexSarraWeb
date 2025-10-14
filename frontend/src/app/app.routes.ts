import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { MaintenanceLayoutComponent } from './core/layouts/maintenance-layout/maintenance-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'maintenance',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'projects',
        loadChildren: () =>
          import('./features/projects/projects.module').then(
            (m) => m.ProjectsModule,
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./features/about/about.module').then((m) => m.AboutModule),
      },
    ],
  },
  {
    // Disable if there is not maintenance right now
    path: 'maintenance',
    component: MaintenanceLayoutComponent,
  },
];
