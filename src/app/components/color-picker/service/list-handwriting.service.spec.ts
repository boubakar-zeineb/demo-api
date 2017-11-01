import { TestBed, inject } from '@angular/core/testing';

import { ListHandwritingService } from './list-handwriting.service';

describe('ListHandwritingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListHandwritingService]
    });
  });

  it('should be created', inject([ListHandwritingService], (service: ListHandwritingService) => {
    expect(service).toBeTruthy();
  }));
});
