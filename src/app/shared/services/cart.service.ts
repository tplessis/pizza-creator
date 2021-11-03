import { Injectable } from '@angular/core';
import { IPizza } from '../models/pizza.interface';
import { IUser } from '../models/user.interface';

enum sessionKeys {
  cart = 'pizza-cart',
  user = 'pizza-user'
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _items: IPizza[];
  private _user: IUser;

  get user(): IUser {
    return this._user;
  }

  get pizzas(): IPizza[] {
    return this._items;
  }

  constructor() {
    const sessionUser = sessionStorage.getItem(sessionKeys.user);
    const sessionCart = sessionStorage.getItem(sessionKeys.cart);

    this._user = sessionUser ? JSON.parse(sessionUser) : undefined;
    this._items = sessionCart ? JSON.parse(sessionCart) : [];
  }

  addPizza(pizza: IPizza) {
    this._items.push(pizza);
    this.addObjectToSession(sessionKeys.cart, this._items);
  }

  removePizza(pizza: IPizza) {
    this._items = this._items.filter((p: IPizza) => pizza !== p);
    this.addObjectToSession(sessionKeys.cart, this._items);
  }

  setUser(user: IUser) {
    this._user = user;
    this.addObjectToSession(sessionKeys.user, user);
  }

  clearCart() {
    this._items = [];
    this.addObjectToSession(sessionKeys.cart, []);
    return this._items;
  }

  private addObjectToSession(key: sessionKeys, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}
