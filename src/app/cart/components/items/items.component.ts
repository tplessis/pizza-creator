import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPizza } from '../../../shared/models/pizza.interface';

@Component({
  selector: 'pizza-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {
  @Input()
  pizzas: IPizza[];

  @Output()
  removePizza = new EventEmitter<IPizza>();

  constructor() {}

  ngOnInit(): void {}

  onRemovePizza(pizza: IPizza) {
    this.removePizza.emit(pizza);
  }
}
