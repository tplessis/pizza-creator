import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as dayjs from 'dayjs'

export const PIZZA_TIME_SLOT_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimeSlotComponent),
  multi: true
};

@Component({
  selector: 'pizza-time-slot',

  providers: [PIZZA_TIME_SLOT_ACCESSOR],
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit {

  @Input()
  deliveryDates: Array<Date>;

  private onModelChange: Function = () => {};
  private onTouch: Function;

  value: Date;
  focused: Date | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
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
    this.focused = undefined;
  }

  onFocus(value: Date) {
    this.focused = value;
    this.onTouch();
  }

  isAvailable(date: Date): boolean {
    return dayjs(date).isAfter(dayjs());
  }
}
