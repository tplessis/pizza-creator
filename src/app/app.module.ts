import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfiguratorComponent } from './configurator/containers/configurator/configurator.component';
import { CartComponent } from './cart/containers/cart/cart.component';
import { ConfiguratorModule } from './configurator/configurator.module';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: '**', component: ConfiguratorComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConfiguratorModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
