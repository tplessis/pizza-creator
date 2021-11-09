import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPizza } from '@shared/models/pizza.interface';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  pizzas: IPizza[];
  shippingPrice : number;
  totalPrice : number;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartData();
  }

  isActive(routeKey: string): boolean {
    return this.router.url === routeKey;
  }

  onRemovePizza(pizza: IPizza) {
    this.cartService.removePizza(pizza);
    this.getCartData();
  }

  private getCartData() {
    this.pizzas = this.cartService.pizzas;
    this.shippingPrice = this.cartService.shippingPrice;
    this.totalPrice = this.cartService.totalPrice;
  }
}
