import { Injectable } from '@angular/core';
import { IPizza } from '../models/pizza.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IPizza[] = [];

  constructor() {}

  addPizza(pizza: IPizza) {
    this.items.push(pizza);
  }

  getPizzas() {
    return this.items;
  }

  clear() {
    this.items = [];
    return this.items;
  }
}
