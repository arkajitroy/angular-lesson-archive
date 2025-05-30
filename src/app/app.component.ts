import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getTodaysDateAndTime } from 'libs/date';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-lesson-archive';
  description = 'This is a lesson project for learning angular';
  date = getTodaysDateAndTime();
}
