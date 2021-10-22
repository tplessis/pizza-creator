import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './containers/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';

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
    ]
  }
];

@NgModule({
  declarations: [
    CartComponent,
    ItemsComponent,
    CustomerFormComponent,
    ShippingFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CartModule { }
