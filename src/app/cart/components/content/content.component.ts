import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { IPizza } from '../../../shared/models/pizza.interface';

@Component({
  selector: 'pizza-cart-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input()
  pizzas: IPizza[];

  @Input()
  totalPrice: number;

  @Input()
  shippingPrice: number;

  @Input()
  cartOpen: boolean;

  @Output()
  removePizza = new EventEmitter<IPizza>();

  @Output()
  openCart = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onRemovePizza(pizza: IPizza): void {
    this.removePizza.emit(pizza);
  }

  onOpenCart(): void {
    this.openCart.emit(!this.cartOpen);
  }
}
