import { Component } from '@angular/core';

@Component({
  selector: 'pizza-root',
  template: `
    <div class="h-full">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
