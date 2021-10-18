import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaIconComponent } from './pizza-icon.component';

describe('PizzaIconComponent', () => {
  let component: PizzaIconComponent;
  let fixture: ComponentFixture<PizzaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
