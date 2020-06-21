import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailPage } from './course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDetailPageRoutingModule {}
