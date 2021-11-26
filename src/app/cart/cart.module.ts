import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './containers/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentItemsComponent } from './components/content-items/content-items.component';
import { CustomerFormComponent } from './containers/customer-form/customer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShippingFormComponent } from './containers/shipping-form/shipping-form.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { TimeSlotComponent } from './components/time-slot/time-slot.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from '@env/environment';
import { SharedModule } from '@shared/shared.module';
import { PaymentFormComponent } from './containers/payment-form/payment-form.component';
import { CreditCardFormComponent } from './components/credit-card-form/credit-card-form.component';
import { ContentComponent } from './components/content/content.component';

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
      { path: 'shipping-infos', component: ShippingFormComponent },
      { path: 'payment-selection', component: PaymentFormComponent }
    ]
  }
];

@NgModule({
  declarations: [
    CartComponent,
    ContentItemsComponent,
    CustomerFormComponent,
    ShippingFormComponent,
    BackButtonComponent,
    TimeSlotComponent,
    PaymentFormComponent,
    CreditCardFormComponent,
    ContentComponent
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
