import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentItemsComponent } from './content-items.component';

describe('ContentItemsComponent', () => {
  let component: ContentItemsComponent;
  let fixture: ComponentFixture<ContentItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentItemsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
