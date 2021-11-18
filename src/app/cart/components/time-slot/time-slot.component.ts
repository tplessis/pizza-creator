import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as dayjs from 'dayjs';

export const PIZZA_TIME_SLOT_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimeSlotComponent),
  multi: true
};

@Component({
  selector: 'pizza-time-slot',
  providers: [PIZZA_TIME_SLOT_ACCESSOR],
  templateUrl: './time-slot.component.html'
})
export class TimeSlotComponent implements OnInit {
  @Input()
  deliveryDates: Array<Date>;

  private onModelChange: (_value: Date) => any;
  private onTouch: () => void;

  value: Date;
  focused: Date | undefined;

  constructor() {}

  ngOnInit(): void {}

  registerOnChange(fn: any) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  writeValue(value: Date) {
    this.value = value;
  }

  onChange(value: Date) {
    this.value = value;
    this.onModelChange(value);
  }

  onBlur(value: Date) {
    this.focused = value;
  }

  onFocus(value: Date) {
    this.focused = value;
    this.onTouch();
  }

  isAvailable(date: Date): boolean {
    return dayjs(date).isAfter(dayjs());
  }
}
