import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IPizzaSize } from '../../../shared/models/pizza-size.interface';

@Component({
  selector: 'pizza-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit {

  form = this.fb.group({
    details: this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      confirm: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(3)]]
    }),
    pizza: this.fb.group({
      size: ['', Validators.required]
    })
  });

  sizes: IPizzaSize[] = [
    { label: 'large', value: 13 },
    { label: 'medium', value: 11 },
    { label: 'small', value: 9 }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }

}
