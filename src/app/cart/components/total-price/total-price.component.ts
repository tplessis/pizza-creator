import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pizza-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss']
})
export class TotalPriceComponent implements OnInit {
  @Input()
  shippingPrice: number;

  @Input()
  totalPrice: number;

  @Input()
  cartOpen: boolean;

  constructor() {}

  ngOnInit(): void {}
}
