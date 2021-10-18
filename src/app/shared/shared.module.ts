import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaIconComponent } from './components/pizza-icon/pizza-icon.component';

@NgModule({
  declarations: [
    PizzaIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PizzaIconComponent]
})
export class SharedModule { }
