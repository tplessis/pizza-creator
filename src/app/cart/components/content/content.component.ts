import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IPizza } from '../../../shared/models/pizza.interface';
import { style } from '@angular/animations';

@Component({
  selector: 'pizza-cart-content',
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

  constructor() { }

  ngOnInit(): void {}

  onRemovePizza(pizza: IPizza): void {
    this.removePizza.emit(pizza);
  }

  onOpenCart(): void {
    this.openCart.emit(!this.cartOpen);
  }
}
