import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '@shared/models/user.interface';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'pizza-shipping-form',
  templateUrl: './shipping-form.component.html',
  styles: ['mgl-map { height: 100%; width: 100%;}']
})
export class ShippingFormComponent implements OnInit {

  form = this.fb.group({

  });

  user: IUser;

  constructor(private fb: FormBuilder, private cartService: CartService) { }

  ngOnInit(): void {
    this.user = this.cartService.user;
  }

  onSubmit(form: FormGroup) {

  }
}
