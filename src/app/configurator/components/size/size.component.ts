import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IPizzaSize } from 'src/app/shared/models/pizza-size.interface';

export const PIZZA_SIZE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SizeComponent),
  multi: true
};

@Component({
  selector: 'pizza-size',
  providers: [PIZZA_SIZE_ACCESSOR],
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements ControlValueAccessor {

  @Input()
  sizes: Array<IPizzaSize>;

  private onModelChange: Function = () => {};
  private onTouch: Function;

  value: number;
  focused: number;

  constructor() { }

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: number) {
    this.value = value;
  }

  onChange(value: number) {
    this.value = value;
    this.onModelChange(value);
  }

  onBlur(value: number) {
    this.focused = 0;
  }

  onFocus(value: number) {
    this.focused = value;
    this.onTouch();
  }
}
