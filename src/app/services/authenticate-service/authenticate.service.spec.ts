import { TestBed, inject } from '@angular/core/testing';

import { AuthenthicateService } from './authenthicate.service';

describe('AuthenthicateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenthicateService]
    });
  });

  it('should be created', inject([AuthenthicateService], (service: AuthenthicateService) => {
    expect(service).toBeTruthy();
  }));
});
