import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IPizzaTopping } from 'src/app/shared/models/pizza-topping.interface';
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
      size: [null, Validators.required],
      toppings: [[], Validators.minLength(3)]
    })
  });

  sizes: IPizzaSize[] = [
    { label: 'large', value: 13 },
    { label: 'medium', value: 11 },
    { label: 'small', value: 9 }
  ];

  toppings: IPizzaTopping[] = [
    { id: 1, label: "anchovy", price: 0.9 },
    { id: 2, label: "bacon", price: 0.9 },
    { id: 3, label: "basil", price: 0.9 },
    { id: 4, label: "chili", price: 0.9 },
    { id: 5, label: "mozzarella", price: 0.9 },
    { id: 6, label: "mushroom", price: 0.9 },
    { id: 7, label: "olive", price: 0.9 },
    { id: 8, label: "onion", price: 0.9 },
    { id: 9, label: "pepper", price: 0.9 },
    { id: 10, label: "pepperoni", price: 0.9 },
    { id: 11, label: "sweetcorn", price: 0.9 },
    { id: 12, label: "tomato", price: 0.9 }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    this.form.markAllAsTouched();
    console.log(form.value);
  }

}
