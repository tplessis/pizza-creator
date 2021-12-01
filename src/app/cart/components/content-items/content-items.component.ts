import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { IPizza } from '@shared/models/pizza.interface';

@Component({
  selector: 'pizza-content-items',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './content-items.component.html'
})
export class ContentItemsComponent implements OnInit {
  @Input()
  pizzas: IPizza[] | null;

  @Output()
  removePizza = new EventEmitter<IPizza>();

  constructor() {}

  ngOnInit(): void {}

  onRemovePizza(pizza: IPizza) {
    this.removePizza.emit(pizza);
  }
}
