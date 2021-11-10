import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './containers/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { CustomerFormComponent } from './containers/customer-form/customer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShippingFormComponent } from './containers/shipping-form/shipping-form.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { TimeSlotComponent } from './components/time-slot/time-slot.component';
import { TotalPriceComponent } from './components/total-price/total-price.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from '@env/environment';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'customer-infos'
      },
      { path: 'customer-infos', component: CustomerFormComponent },
      { path: 'shipping-infos', component: ShippingFormComponent }
    ]
  }
];

@NgModule({
  declarations: [
    CartComponent,
    ItemsComponent,
    CustomerFormComponent,
    ShippingFormComponent,
    BackButtonComponent,
    TimeSlotComponent,
    TotalPriceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapbox_access_token
    }),
    SharedModule
  ]
})
export class CartModule {}
