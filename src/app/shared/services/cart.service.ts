import { Injectable } from '@angular/core';
import { IPizza } from '../models/pizza.interface';
import { IUser } from '../models/user.interface';

enum sessionKeys {
  cart = 'pizza-cart',
  user = 'pizza-user',
  deliveryTime = 'deliveryTime'
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _items: IPizza[];
  private _user: IUser;
  private _deliveryTime: Date;
  private _shippingPrice = 4.5;

  get user(): IUser {
    return this._user;
  }

  get pizzas(): IPizza[] {
    return this._items;
  }

  get deliveryTime(): Date {
    return this._deliveryTime;
  }

  get shippingPrice(): number {
    return this._shippingPrice;
  }

  get totalPrice(): number {
    return this._items.reduce((prev: number, next: IPizza) => {
      return prev + this.getPizzaPrice(next);
    }, 0);
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

  setDeliveryTime(date: Date) {
    this._deliveryTime = date;
    this.addObjectToSession(sessionKeys.deliveryTime, date);
  }

  clearCart() {
    this._items = [];
    this.addObjectToSession(sessionKeys.cart, []);
    return this._items;
  }

  getPizzaPrice(pizza: IPizza): number {
    if (!pizza) {
      return 0;
    }

    if (pizza.toppings.length === 0) {
      return pizza.size ? pizza.size.price : 0;
    }

    return pizza.toppings.reduce((prev: number, next: any) => {
      return prev + next?.price;
    }, pizza?.size?.price || 0);
  }

  private addObjectToSession(key: sessionKeys, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}
