import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck, map, tap } from 'rxjs/operators';
import { IPizza } from '../models/pizza.interface';
import { IUser } from '../models/user.interface';

export interface CartState {
  user: IUser | undefined;
  pizzas: IPizza[];
  deliveryTime: Date | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private subject: BehaviorSubject<CartState>;
  private cartStore: Observable<CartState>;
  private _shippingPrice = 4.5;

  get value() {
    return this.subject.value;
  }

  get shippingPrice(): number {
    return this._shippingPrice;
  }

  get pizzas$(): Observable<IPizza[]> {
    return this.cartStore.pipe(pluck('pizzas'));
  }

  get user$(): Observable<IUser | undefined> {
    return this.cartStore.pipe(pluck('user'));
  }

  get deliveryTime$(): Observable<Date | undefined> {
    return this.cartStore.pipe(pluck('deliveryTime'));
  }

  get totalPrice$(): Observable<number> {
    return this.pizzas$.pipe(
      map((pizzas: IPizza[]) => {
        return pizzas.reduce((prev: number, next: IPizza) => {
          return prev + this.getPizzaPrice(next);
        }, 0);
      })
    );
  }

  constructor() {
    const state: CartState = JSON.parse(
      sessionStorage.getItem('pizza-state') ??
        JSON.stringify({
          user: undefined,
          pizzas: [],
          deliveryTime: undefined
        })
    );

    this.subject = new BehaviorSubject<CartState>(state);
    this.cartStore = this.subject.asObservable().pipe(
      distinctUntilChanged(),
      tap((state) => {
        sessionStorage.setItem('pizza-state', JSON.stringify(state));
      })
    );
  }

  private getPizzaPrice(pizza: IPizza): number {
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

  addPizza(pizza: IPizza): void {
    this.subject.next({
      ...this.value,
      pizzas: [...this.value.pizzas, { ...pizza, id: this.value.pizzas.length }]
    });
  }

  removePizza(pizza: IPizza): void {
    this.subject.next({
      ...this.value,
      pizzas: [...this.value.pizzas.filter((p) => p.id !== pizza.id)]
    });
  }

  setUser(user: IUser): void {
    this.subject.next({
      ...this.value,
      user: user
    });
  }

  setDeliveryTime(date: Date): void {
    this.subject.next({
      ...this.value,
      deliveryTime: date
    });
  }
}
