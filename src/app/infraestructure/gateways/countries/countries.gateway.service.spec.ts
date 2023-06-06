import { TestBed } from '@angular/core/testing';

import { CountriesGatewayService } from './countries.gateway.service';

describe('CountriesGatewayService', () => {
  let service: CountriesGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
