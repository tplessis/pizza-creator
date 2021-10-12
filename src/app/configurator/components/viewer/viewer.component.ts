import { animate, style, transition, trigger } from '@angular/animations';
import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { IPizza } from 'src/app/shared/models/pizza.interface';

export const DROP_ANIMATION = trigger('drop', [
  transition(':enter', [
    style({ transform: 'translateY(-200px)', opacity: 0 }),
    animate('300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({ transform: 'translateY(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate('200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({ transform: 'translateY(-200px)', opacity: 0 }))
  ])
]);

@Component({
  selector: 'pizza-viewer',
  animations: [DROP_ANIMATION],
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
