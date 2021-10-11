import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartIndicatorComponent } from './cart-indicator.component';

describe('CartIndicatorComponent', () => {
  let component: CartIndicatorComponent;
  let fixture: ComponentFixture<CartIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
