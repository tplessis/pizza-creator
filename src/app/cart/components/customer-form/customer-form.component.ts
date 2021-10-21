import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'pizza-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  form = this.fb.group({
    firstname: [this.cartService.user?.firstname, Validators.required],
    lastname: [this.cartService.user?.lastname, Validators.required],
    email: [this.cartService.user?.email, Validators.required],
    confirm: [this.cartService.user?.email, Validators.required],
    phone: [this.cartService.user?.phone, Validators.required],
    address: [this.cartService.user?.address, [Validators.required, Validators.minLength(3)]],
    zipcode: [this.cartService.user?.zipcode, [Validators.required, Validators.minLength(5)]],
    city: [this.cartService.user?.city, [Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb: FormBuilder, private cartService: CartService) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    this.form.markAllAsTouched();
    console.log(form.value);

    if (this.form.valid) {
      this.cartService.setUser(this.form.value.details);
    }
  }
}
