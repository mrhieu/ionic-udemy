import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CoursePlayingPage } from '../course-playing/course-playing.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openCourse() {
    const modal = await this.modalCtrl.create({
      component: CoursePlayingPage,
      swipeToClose: true,
    });
    return await modal.present();
  }

}
