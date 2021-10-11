import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorComponent } from './containers/configurator/configurator.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SizeComponent } from './components/size/size.component';
import { ToppingsComponent } from './components/toppings/toppings.component';
import { CartIndicatorComponent } from './components/cart-indicator/cart-indicator.component';

@NgModule({
  declarations: [
    CartIndicatorComponent,
    ConfiguratorComponent,
    ViewerComponent,
    FormComponent,
    SizeComponent,
    ToppingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConfiguratorModule { }
