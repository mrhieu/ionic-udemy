import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-course-playing',
  templateUrl: './course-playing.page.html',
  styleUrls: ['./course-playing.page.scss'],
})
export class CoursePlayingPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
