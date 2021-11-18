import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IPizzaTopping } from '@shared/models/pizza-topping.interface';
import { IPizzaSize } from '@shared/models/pizza-size.interface';
import { CartService } from '@shared/services/cart.service';
import { Router } from '@angular/router';
import { IPizza } from '@shared/models/pizza.interface';

@Component({
  selector: 'pizza-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit {
  form = this.fb.group({
    size: [null, Validators.required],
    toppings: [[], [Validators.required, Validators.minLength(3)]]
  });

  sizes: IPizzaSize[] = [
    { label: 'large', value: 13, price: 8.5 },
    { label: 'medium', value: 11, price: 7 },
    { label: 'small', value: 9, price: 6 }
  ];

  toppings: IPizzaTopping[] = [
    { id: 1, label: 'anchovy', price: 0.9 },
    { id: 2, label: 'bacon', price: 0.9 },
    { id: 3, label: 'basil', price: 0.9 },
    { id: 4, label: 'chili', price: 0.9 },
    { id: 5, label: 'mozzarella', price: 0.9 },
    { id: 6, label: 'mushroom', price: 0.9 },
    { id: 7, label: 'olive', price: 0.9 },
    { id: 8, label: 'onion', price: 0.9 },
    { id: 9, label: 'pepper', price: 0.9 },
    { id: 10, label: 'pepperoni', price: 0.9 },
    { id: 11, label: 'sweetcorn', price: 0.9 },
    { id: 12, label: 'tomato', price: 0.9 }
  ];

  pizzas: IPizza[];

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pizzas = this.cartService.pizzas;
  }

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.cartService.addPizza(this.form.value);
      this.router.navigate(['cart']);
    }
  }
}
