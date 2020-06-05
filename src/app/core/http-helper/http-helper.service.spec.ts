import { TestBed } from '@angular/core/testing';

import { HttpHelperService } from './http-helper.service';

describe('HttpHelperService', () => {
  let service: HttpHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
