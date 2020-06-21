import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursePlayingPage } from './course-playing.page';

describe('CoursePlayingPage', () => {
  let component: CoursePlayingPage;
  let fixture: ComponentFixture<CoursePlayingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePlayingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursePlayingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
