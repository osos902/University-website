import { TestBed } from '@angular/core/testing';

import { ItsgareApiService } from './itsgare-api.service';

describe('ItsgareApiService', () => {
  let service: ItsgareApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItsgareApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
