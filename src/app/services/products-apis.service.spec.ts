import { TestBed } from '@angular/core/testing';

import { ProductsAPISService } from './products-apis.service';

describe('ProductsAPISService', () => {
  let service: ProductsAPISService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsAPISService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
