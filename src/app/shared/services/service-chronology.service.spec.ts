import { TestBed } from '@angular/core/testing';

import { ServiceChronologyService } from './service-chronology.service';

describe('ServiceChronologyService', () => {
  let service: ServiceChronologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceChronologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
