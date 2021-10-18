import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './containers/cart/cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CartModule { }
