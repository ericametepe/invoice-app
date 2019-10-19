import { TestBed, inject } from '@angular/core/testing';

import { SharestateService } from './sharestate.service';

describe('SharestateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharestateService]
    });
  });

  it('should be created', inject([SharestateService], (service: SharestateService) => {
    expect(service).toBeTruthy();
  }));
});
