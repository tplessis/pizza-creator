import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfiguratorComponent } from './configurator/containers/configurator/configurator.component';
import { ConfiguratorModule } from './configurator/configurator.module';

import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: '',
    component: ConfiguratorComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConfiguratorModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr'},
  ],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
