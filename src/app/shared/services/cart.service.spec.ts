import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';

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

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a pizza to cart', (done: DoneFn) => {
    service.clearCart();
    service.addPizza(pizzasMock[0]);

    service.pizzas$.subscribe((pizzas) => {
      expect(pizzas.length).toEqual(1);
      done();
    });
  });

  it('should remove a pizza from cart', (done: DoneFn) => {
    service.clearCart();
    service.addPizza(pizzasMock[0]);
    service.addPizza(pizzasMock[1]);
    service.removePizza(pizzasMock[0]);

    service.pizzas$.subscribe((pizzas) => {
      expect(pizzas.length).toEqual(1);
      done();
    });
  });

  it('should calculate total price', (done: DoneFn) => {
    service.clearCart();
    service.addPizza(pizzasMock[0]);
    service.addPizza(pizzasMock[1]);
    service.addPizza(pizzasMock[2]);

    service.totalPrice$.subscribe((price) => {
      expect(price).toEqual(39.2);
      done();
    });
  });

  it('should clear the cart', (done: DoneFn) => {
    service.clearCart();
    service.addPizza(pizzasMock[0]);
    service.addPizza(pizzasMock[1]);
    service.addPizza(pizzasMock[2]);
    service.clearCart();

    service.pizzas$.subscribe((pizzas) => {
      expect(pizzas.length).toEqual(0);
      done();
    });
  });
});
