import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { HoverScalingButtonComponent } from '../../shared/components/hover-scaling-button/hover-scaling-button.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HoverScalingButtonComponent,
  ],
})
export class AboutModule {}
