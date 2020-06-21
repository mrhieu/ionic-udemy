import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursePlayingPageRoutingModule } from './course-playing-routing.module';

import { CoursePlayingPage } from './course-playing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursePlayingPageRoutingModule
  ],
  declarations: [CoursePlayingPage]
})
export class CoursePlayingPageModule {}
