import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentItemsComponent } from './content-items.component';
import { PizzaPricePipe } from '../../../shared/pipes/pizza-price.pipe';
import { By } from '@angular/platform-browser';

const pizzasMock = [
  {
    size: { label: 'large', value: 13, price: 8.5 },
    toppings: [
      { id: 1, label: 'anchovy', price: 0.9 },
      { id: 2, label: 'bacon', price: 0.9 },
      { id: 5, label: 'mozzarella', price: 0.9 },
      { id: 8, label: 'onion', price: 0.9 }
    ],
    id: 1
  },
  {
    size: { label: 'large', value: 13, price: 8.5 },
    toppings: [
      { id: 1, label: 'anchovy', price: 0.9 },
      { id: 2, label: 'bacon', price: 0.9 },
      { id: 3, label: 'basil', price: 0.9 },
      { id: 6, label: 'mushroom', price: 0.9 },
      { id: 5, label: 'mozzarella', price: 0.9 },
      { id: 4, label: 'chili', price: 0.9 }
    ],
    id: 2
  },
  {
    size: { label: 'small', value: 9, price: 6 },
    toppings: [
      { id: 2, label: 'bacon', price: 0.9 },
      { id: 3, label: 'basil', price: 0.9 },
      { id: 6, label: 'mushroom', price: 0.9 },
      { id: 5, label: 'mozzarella', price: 0.9 },
      { id: 1, label: 'anchovy', price: 0.9 },
      { id: 7, label: 'olive', price: 0.9 },
      { id: 10, label: 'pepperoni', price: 0.9 },
      { id: 11, label: 'sweetcorn', price: 0.9 }
    ],
    id: 3
  }
];

describe('ContentItemsComponent', () => {
  let component: ContentItemsComponent;
  let fixture: ComponentFixture<ContentItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentItemsComponent, PizzaPricePipe],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideComponent(ContentItemsComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display pizzas', () => {
    component.pizzas = pizzasMock;
    fixture.detectChanges();
    expect(
      fixture.debugElement.queryAll(By.css('.pizzas-container .pizza'))?.length
    ).toEqual(3);
  });
});
