import { TestBed } from '@angular/core/testing';
import { GeocodingService } from './geocoding.service';
import { HttpClientModule } from '@angular/common/http';

describe('GeocodingService', () => {
  let service: GeocodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(GeocodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
