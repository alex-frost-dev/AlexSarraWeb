import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/projects', pathMatch: 'full'
    },
    {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
    },
    {
        path: 'test',
        loadComponent: () => import('./test/img-movables/img-movables.component').then(m => m.ImgMovablesComponent)
    }
];