import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pizza-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input()
  parent: FormGroup;

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
