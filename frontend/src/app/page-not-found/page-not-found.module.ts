import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundLayoutComponent } from '../core/layouts/page-not-found-layout/page-not-found-layout.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { WindowSizeService } from '../core/services/window-size/window-size.service';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundLayoutComponent,
    children: [{ path: '', component: PageNotFoundComponent }],
  },
];

@NgModule({
  declarations: [PageNotFoundLayoutComponent, PageNotFoundComponent],
  imports: [CommonModule, TranslateModule, RouterModule.forChild(routes)],
  providers: [WindowSizeService],
  exports: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
