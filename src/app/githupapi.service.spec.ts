import { TestBed, inject } from '@angular/core/testing';

import { GithupapiService } from './githupapi.service';

describe('GithupapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithupapiService]
    });
  });

  it('should be created', inject([GithupapiService], (service: GithupapiService) => {
    expect(service).toBeTruthy();
  }));
});
