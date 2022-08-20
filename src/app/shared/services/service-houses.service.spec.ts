import { TestBed } from '@angular/core/testing';

import { ServiceHousesService } from './service-houses.service';

describe('ServiceHousesService', () => {
  let service: ServiceHousesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHousesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
