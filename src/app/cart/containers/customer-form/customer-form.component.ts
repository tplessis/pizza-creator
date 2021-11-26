import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'pizza-customer-form',
  templateUrl: './customer-form.component.html'
})
export class CustomerFormComponent implements OnInit {
  form = this.fb.group({
    firstname: [this.cartService.user?.firstname, Validators.required],
    lastname: [this.cartService.user?.lastname, Validators.required],
    email: [
      this.cartService.user?.email,
      [Validators.required, Validators.email]
    ],
    phone: [
      this.cartService.user?.phone,
      [
        Validators.required,
        Validators.pattern(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)
      ]
    ],
    address: [
      this.cartService.user?.address,
      [Validators.required, Validators.minLength(3)]
    ],
    zipcode: [
      this.cartService.user?.zipcode,
      [Validators.required, Validators.minLength(5)]
    ],
    city: [
      this.cartService.user?.city,
      [Validators.required, Validators.minLength(3)]
    ]
  });

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.cartService.setUser(this.form.value);
      this.router.navigate(['cart/shipping-infos']);
    }
  }
}
