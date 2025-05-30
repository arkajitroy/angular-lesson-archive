import { Component } from '@angular/core';
import { getTodaysDateAndTime } from '../libs/date';
import { CardComponent } from './components/card/card.component';
// import { CounterAppComponent } from './counter-app/counter-app.component';
import { FormAppComponent } from './form-app/form-app.component';

@Component({
  selector: 'app-root',
  imports: [FormAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-lesson-archive';
  description = 'This is a lesson project for learning angular';
  date = getTodaysDateAndTime();
}
