import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IPizzaSize } from '@shared/models/pizza-size.interface';
import { IPizzaTopping } from '@shared/models/pizza-topping.interface';

@Component({
  selector: 'pizza-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  @Input()
  parent: FormGroup;

  @Input()
  sizes: Array<IPizzaSize>;

  @Input()
  toppings: Array<IPizzaTopping>;

  @Output()
  submit = new EventEmitter<FormGroup>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event) {
    event.stopPropagation();
    this.submit.emit(this.parent);
  }
}
