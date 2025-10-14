import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManteinanceComponent } from './maintenance.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ManteinanceComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ManteinanceModule {}
