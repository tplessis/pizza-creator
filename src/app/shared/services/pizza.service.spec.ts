import { TestBed } from '@angular/core/testing';
import { PizzaService } from './pizza.service';
import { HttpClientModule } from '@angular/common/http';

describe('PizzaService', () => {
  let service: PizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(PizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
