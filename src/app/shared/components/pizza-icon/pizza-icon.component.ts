import { Component, Input } from '@angular/core';
import { IPizzaSize } from '@shared/models/pizza-size.interface';

@Component({
  selector: 'pizza-icon',
  templateUrl: './pizza-icon.component.html',
  styleUrls: ['./pizza-icon.component.scss']
})
export class PizzaIconComponent {
  @Input()
  size: IPizzaSize;

  @Input()
  active = false;

  @Input()
  darkMode = false;

  constructor() {}
}
