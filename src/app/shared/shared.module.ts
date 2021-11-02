import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PizzaIconComponent } from './components/pizza-icon/pizza-icon.component';
import { PizzaPricePipe } from './pipes/pizza-price.pipe';

@NgModule({
  declarations: [
    PizzaIconComponent,
    PizzaPricePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    PizzaIconComponent,
    PizzaPricePipe
  ]
})
export class SharedModule { }
