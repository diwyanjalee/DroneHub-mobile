import { TestBed } from '@angular/core/testing';

import { QAndAService } from './q-and-a.service';

describe('QAndAService', () => {
  let service: QAndAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QAndAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
