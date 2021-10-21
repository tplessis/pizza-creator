import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaIconComponent } from './components/pizza-icon/pizza-icon.component';
import { PizzaPricePipe } from './pipes/pizza-price.pipe';

@NgModule({
  declarations: [
    PizzaIconComponent,
    PizzaPricePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PizzaIconComponent,
    PizzaPricePipe
  ]
})
export class SharedModule { }
