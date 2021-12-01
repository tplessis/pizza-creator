import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from '@shared/models/user.interface';
import { CartService } from '@shared/services/cart.service';
import { GeocodingService } from '@shared/services/geocoding.service';
import { LngLatLike } from 'mapbox-gl';
import { tap, map, filter, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import dayjs from 'dayjs';
import { Observable } from 'rxjs';

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
    deliveryTime: [null, Validators.required]
  });

  user$: Observable<IUser | undefined>;
  center$: Observable<LngLatLike>;
  defaultCenter: [2.454071, 46.279229];

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private geocodingService: GeocodingService,
    private router: Router
  ) {
    this.user$ = this.cartService.user$.pipe(
      filter((user) => !!user),
      tap((user) => {
        this.center$ = this.geocodingService
          .getGeocoding(user?.address + ' ' + user?.zipcode + ' ' + user?.city)
          .pipe(
            map((center) => {
              if (!center) {
                return this.defaultCenter;
              }

              return center;
            })
          );
      }),
      take(1)
    );

    this.cartService.deliveryTime$.subscribe((deliveryTime) =>
      this.form.controls['deliveryTime'].setValue(deliveryTime)
    );
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
