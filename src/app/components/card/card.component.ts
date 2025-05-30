import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() tags: string[] = [];

  logger(msg: string) {
    console.log('Log:', msg);
  }

  handleClickEvent(msg: string) {
    alert(msg);
    this.logger('Button got clicked.');
  }
}
