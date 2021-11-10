import { Component, Input, OnInit } from '@angular/core';
import { IPizza } from '@shared/models/pizza.interface';

@Component({
  selector: 'pizza-cart-indicator',
  templateUrl: './cart-indicator.component.html',
  styleUrls: ['./cart-indicator.component.scss']
})
export class CartIndicatorComponent implements OnInit {
  @Input()
  pizzas: Array<IPizza>;

  constructor() {}

  ngOnInit(): void {}
}
