import { IPizzaTopping } from '@shared/models/pizza-topping.interface';
import { IPizzaSize } from '@shared/models/pizza-size.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '@shared/services/cart.service';
import { Router } from '@angular/router';
import { IPizza } from '@shared/models/pizza.interface';
import { combineLatest } from 'rxjs';
import { PizzaService } from '@shared/services/pizza.service';

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

  sizes: IPizzaSize[];
  toppings: IPizzaTopping[];
  pizzas: IPizza[];

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private pizzaService: PizzaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pizzas = this.cartService.pizzas;
    combineLatest([
      this.pizzaService.getSizes(),
      this.pizzaService.getToppings()
    ]).subscribe(
      ([sizes, toppings]) => {
        this.sizes = sizes;
        this.toppings = toppings;
      },
      (err) => console.error(err)
    );
  }

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.cartService.addPizza(this.form.value);
      this.router.navigate(['cart']);
    }
  }
}
