import { IPizzaSize } from './pizza-size.interface';
import { IPizzaTopping } from './pizza-topping.interface';

export interface IPizza {
  id?: number;
  size: IPizzaSize;
  toppings: Array<IPizzaTopping>;
}
