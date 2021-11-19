import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '@shared/models/user.interface';
import { CartService } from '@shared/services/cart.service';
import { GeocodingService } from '@shared/services/geocoding.service';
import { LngLatLike } from 'mapbox-gl';
import { take } from 'rxjs/operators';
import * as dayjs from 'dayjs';
import { Router } from '@angular/router';

@Component({
  selector: 'pizza-shipping-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './shipping-form.component.html',
  styles: ['mgl-map { height: 100%; width: 100%;}']
})
export class ShippingFormComponent implements OnInit {
  deliveryDates = [
    dayjs().hour(11).minute(0).second(0).toDate(),
    dayjs().hour(12).minute(0).second(0).toDate(),
    dayjs().hour(13).minute(0).second(0).toDate(),
    dayjs().hour(14).minute(0).second(0).toDate(),
    dayjs().hour(19).minute(0).second(0).toDate(),
    dayjs().hour(20).minute(0).second(0).toDate(),
    dayjs().hour(21).minute(0).second(0).toDate(),
    dayjs().hour(22).minute(0).second(0).toDate(),
    dayjs().add(1, 'day').hour(11).minute(0).second(0).toDate(),
    dayjs().add(1, 'day').hour(12).minute(0).second(0).toDate(),
    dayjs().add(1, 'day').hour(13).minute(0).second(0).toDate(),
    dayjs().add(1, 'day').hour(14).minute(0).second(0).toDate()
  ];

  form = this.fb.group({
    deliveryTime: [this.cartService.deliveryTime, Validators.required]
  });

  user: IUser;
  center: LngLatLike | undefined = [2.454071, 46.279229];

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private cartService: CartService,
    private geocodingService: GeocodingService,
    private router: Router
  ) {
    this.user = this.cartService.user;

    if (this.user) {
      this.geocodingService
        .getGeocoding(
          this.user.address + ' ' + this.user.zipcode + ' ' + this.user.city
        )
        .pipe(take(1))
        .subscribe((location) => {
          this.center = location;
          this.cdr.markForCheck();
        });
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.cartService.setDeliveryTime(this.form.value.deliveryTime);
      this.router.navigate(['cart/payment-selection']);
    }
  }
}
