import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartIndicatorComponent } from './cart-indicator.component';

describe('CartIndicatorComponent', () => {
  let component: CartIndicatorComponent;
  let fixture: ComponentFixture<CartIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartIndicatorComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create cart indicator component', () => {
    expect(component).toBeTruthy();
  });
});
