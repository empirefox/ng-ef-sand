import { TestBed, inject } from '@angular/core/testing';

import { PayService } from './pay.service';

describe('PayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PayService]
    });
  });

  it('should ...', inject([PayService], (service: PayService) => {
    expect(service).toBeTruthy();
  }));
});
