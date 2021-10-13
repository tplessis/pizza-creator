import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfiguratorComponent } from './configurator.component';

describe('ConfiguratorComponent', () => {
  let component: ConfiguratorComponent;
  let fixture: ComponentFixture<ConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ ConfiguratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the configurator', () => {
    expect(component).toBeTruthy();
  });
});
