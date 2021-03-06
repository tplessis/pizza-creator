import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorComponent } from './containers/configurator/configurator.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SizeComponent } from './components/size/size.component';
import { ToppingsComponent } from './components/toppings/toppings.component';
import { CartIndicatorComponent } from './components/cart-indicator/cart-indicator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

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
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class ConfiguratorModule {}
