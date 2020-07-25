import { TestBed } from '@angular/core/testing';

import { MapsService } from '.././services/maps.service';

describe('MapsService', () => {
  let service: MapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
