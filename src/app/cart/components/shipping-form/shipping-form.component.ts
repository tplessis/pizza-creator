import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'pizza-shipping-form',
  templateUrl: './shipping-form.component.html',
  styles: ['mgl-map { height: 100%; width: 100%;}']
})
export class ShippingFormComponent implements OnInit {

  form = this.fb.group({

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {

  }
}
