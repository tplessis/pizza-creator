import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorComponent } from './containers/configurator/configurator.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SizeComponent } from './components/size/size.component';

@NgModule({
  declarations: [
    ConfiguratorComponent,
    ViewerComponent,
    FormComponent,
    SizeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConfiguratorModule { }
