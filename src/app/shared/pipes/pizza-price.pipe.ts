import { Pipe, PipeTransform } from '@angular/core';
import { IPizza } from '../models/pizza.interface';

@Pipe({ name: 'pizzaPrice' })
export class PizzaPricePipe implements PipeTransform {
  transform(pizza: IPizza): number {
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
}
