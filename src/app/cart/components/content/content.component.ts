import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { IPizza } from '@shared/models/pizza.interface';

@Component({
  selector: 'pizza-cart-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  _pizzas: IPizza[];

  get pizzas(): IPizza[] {
    return this._pizzas;
  }

  @Input()
  set pizzas(value: IPizza[] | null) {
    this._pizzas = value || [];
  }

  _totalPrice: number;

  get totalPrice(): number {
    return this._totalPrice;
  }

  @Input()
  set totalPrice(value: number | null) {
    this._totalPrice = value || 0;
  }

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
