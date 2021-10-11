import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { IPizza } from 'src/app/shared/models/pizza.interface';

@Component({
  selector: 'pizza-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, AfterContentInit {

  @Input()
  pizza: IPizza;

  active = false;

  get pizzaPrice(): number {
    if (!this.pizza) {
      return 0;
    }

    if (this.pizza.toppings.length === 0) {
      return this.pizza.size ? this.pizza.size.price : 0;
    }

    return this.pizza.toppings.reduce((prev: number, next: any) => {
      return prev + next?.price;
    }, this.pizza?.size?.price || 0);
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.active = true;
    }, 500);
  }
}
