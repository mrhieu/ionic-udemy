import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursePlayingPage } from './course-playing.page';

const routes: Routes = [
  {
    path: '',
    component: CoursePlayingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursePlayingPageRoutingModule {}
