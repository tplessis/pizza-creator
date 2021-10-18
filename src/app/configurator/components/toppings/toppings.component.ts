import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IPizzaTopping } from '@shared/models/pizza-topping.interface';

export const PIZZA_TOPPINGS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToppingsComponent),
  multi: true
};

@Component({
  selector: 'pizza-toppings',
  providers: [PIZZA_TOPPINGS_ACCESSOR],
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.scss']
})
export class ToppingsComponent implements ControlValueAccessor {

  @Input()
  toppings: Array<IPizzaTopping>;

  private onModelChange: Function = () => {};
  private onTouch: Function;

  value: Array<IPizzaTopping> = [];
  focused!: IPizzaTopping|null;

  constructor() { }

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value) {
    this.value = value;
  }

  onChange(topping: IPizzaTopping) {
    if (this.value.includes(topping)) {
      this.value = this.value.filter((t: IPizzaTopping) => topping !== t);
    } else {
      this.value = this.value.concat([topping]);
    }
    this.onModelChange(this.value);
  }

  onBlur(value: IPizzaTopping) {
    this.focused = null;
  }

  onFocus(value: IPizzaTopping) {
    this.focused = value;
    this.onTouch();
  }

}
