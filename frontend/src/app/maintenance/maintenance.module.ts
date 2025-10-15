import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceLayoutComponent } from '../core/layouts/maintenance-layout/maintenance-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceLayoutComponent,
    children: [{ path: '', component: MaintenanceComponent }],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes)],
})
export class MaintenanceModule {}
