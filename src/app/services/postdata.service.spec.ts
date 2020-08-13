import { TestBed } from '@angular/core/testing';

import { PostdataService } from './postdata.service';

describe('PostdataService', () => {
  let service: PostdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
