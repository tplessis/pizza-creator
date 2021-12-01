import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPizza } from '@shared/models/pizza.interface';
import { CartService } from '@shared/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  pizzas$: Observable<IPizza[]>;
  totalPrice$: Observable<number>;
  shippingPrice: number;
  cartOpen = false;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.pizzas$ = this.cartService.pizzas$;
    this.totalPrice$ = this.cartService.totalPrice$;
    this.shippingPrice = this.cartService.shippingPrice;
  }

  isActive(routeKey: string): boolean {
    return this.router.url === routeKey;
  }

  onOpenCart(): void {
    this.cartOpen = !this.cartOpen;
  }

  onRemovePizza(pizza: IPizza): void {
    this.cartService.removePizza(pizza);
    //this.getCartData();
  }

  /*private getCartData() {
    this.pizzas = this.cartService.pizzas;
    this.shippingPrice = this.cartService.shippingPrice;
    this.totalPrice = this.cartService.totalPrice;
  }*/
}
