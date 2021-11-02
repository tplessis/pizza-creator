import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '@shared/models/user.interface';
import { CartService } from '@shared/services/cart.service';
import { GeocodingService } from '@shared/services/geocoding.service';
import { IGeocoderResult } from '@shared/models/geocoder.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { LngLatLike } from 'mapbox-gl';

@Component({
  selector: 'pizza-shipping-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './shipping-form.component.html',
  styles: ['mgl-map { height: 100%; width: 100%;}']
})
export class ShippingFormComponent implements OnInit {

  form = this.fb.group({

  });

  user: IUser;
  $geocodedLocation: Observable<LngLatLike | undefined>;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private geocodingService: GeocodingService
  ) {
    this.user = this.cartService.user;

    if (this.user) {
      this.$geocodedLocation = this.geocodingService.getGeocoding(
        this.user.address + ' ' + this.user.zipcode + ' ' + this.user.city
      );
    }
  }

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {

  }
}
