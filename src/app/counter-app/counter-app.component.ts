import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css',
})
export class CounterAppComponent {
  count = 0;

  handleCounter(op: 'increment' | 'decrement' | 'reset') {
    op === 'increment'
      ? (this.count = this.count + 1)
      : op === 'decrement' && this.count !== 0
      ? (this.count = this.count - 1)
      : op === 'reset'
      ? (this.count = 0)
      : null;
  }
}
