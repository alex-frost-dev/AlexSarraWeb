import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { MaintenanceLayoutComponent } from './core/layouts/maintenance-layout/maintenance-layout.component';
import { PageNotFoundLayoutComponent } from './core/layouts/page-not-found-layout/page-not-found-layout.component';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

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
    loadChildren: () =>
      import('./maintenance/maintenance.module').then(
        (m) => m.MaintenanceModule,
      ),
  },
  // ERROR 404
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule,
      ),
  },
];
