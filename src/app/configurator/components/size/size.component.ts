import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { IPizzaSize } from '@shared/models/pizza-size.interface';

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
  parent: FormGroup;

  @Input()
  sizes: Array<IPizzaSize>;

  private onModelChange: any = () => {};
  private onTouch: () => void;

  value: IPizzaSize;
  focused: IPizzaSize | undefined;

  constructor() {}

  registerOnChange(fn: any) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  writeValue(value: IPizzaSize) {
    this.value = value;
  }

  onChange(value: IPizzaSize) {
    this.value = value;
    this.onModelChange(value);
  }

  onBlur(value: IPizzaSize) {
    this.focused = value;
  }

  onFocus(value: IPizzaSize) {
    this.focused = value;
    this.onTouch();
  }
}
