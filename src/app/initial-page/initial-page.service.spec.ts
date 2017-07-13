import { TestBed, inject } from '@angular/core/testing';

import { InitialPageService } from './initial-page.service';

describe('InitialPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitialPageService]
    });
  });

  it('should be created', inject([InitialPageService], (service: InitialPageService) => {
    expect(service).toBeTruthy();
  }));
});
