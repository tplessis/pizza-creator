import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { IPizza } from '@shared/models/pizza.interface';

@Component({
  selector: 'pizza-cart-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart-indicator.component.html'
})
export class CartIndicatorComponent implements OnInit {
  @Input()
  pizzas: Array<IPizza> | null;

  constructor() {}

  ngOnInit(): void {}
}
