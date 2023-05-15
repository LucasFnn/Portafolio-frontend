import { TestBed } from '@angular/core/testing';

import { ContGralService } from './cont-gral.service';

describe('ContGralService', () => {
  let service: ContGralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContGralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
