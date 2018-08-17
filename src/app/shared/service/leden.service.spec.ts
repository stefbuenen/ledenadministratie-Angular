import { TestBed, inject } from '@angular/core/testing';

import { LedenService } from './leden.service';

describe('LedenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LedenService]
    });
  });

  it('should be created', inject([LedenService], (service: LedenService) => {
    expect(service).toBeTruthy();
  }));
});
