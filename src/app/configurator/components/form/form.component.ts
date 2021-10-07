import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IPizzaSize } from 'src/app/shared/models/pizza-size.interface';

@Component({
  selector: 'pizza-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Input()
  sizes: Array<IPizzaSize>;

  @Output()
  submit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event) {
    event.stopPropagation();
    this.submit.emit(this.parent);
  }

}
