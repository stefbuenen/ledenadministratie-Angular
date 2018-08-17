import { TestBed, inject } from '@angular/core/testing';

import { RollenService } from './rollen.service';

describe('RollenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollenService]
    });
  });

  it('should be created', inject([RollenService], (service: RollenService) => {
    expect(service).toBeTruthy();
  }));
});
