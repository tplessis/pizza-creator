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
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)
      ]
    ],
    address: ['', [Validators.required, Validators.minLength(3)]],
    zipcode: ['', [Validators.required, Validators.minLength(5)]],
    city: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.user$.subscribe((user) => {
      if (user) {
        this.form.setValue(user);
      }
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.cartService.setUser(this.form.value);
      this.router.navigate(['cart/shipping-infos']);
    }
  }
}
