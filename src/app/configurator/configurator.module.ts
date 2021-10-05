import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorComponent } from './containers/configurator/configurator.component';
import { ViewerComponent } from './components/viewer/viewer.component';

@NgModule({
  declarations: [
    ConfiguratorComponent,
    ViewerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConfiguratorModule { }
