import { Injectable } from '@angular/core';
import { IPizza } from '../models/pizza.interface';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _items: IPizza[] = [];
  private _user: IUser;

  get user(): IUser {
    return this._user;
  }

  get pizzas(): IPizza[] {
    return this._items;
  }

  constructor() {}

  addPizza(pizza: IPizza) {
    this._items.push(pizza);
  }

  setUser(user: IUser) {
    this._user = user;
  }

  clearCart() {
    this._items = [];
    return this._items;
  }
}
