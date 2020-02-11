import { TestBed } from '@angular/core/testing';

import { FornecedorRegistrationService } from './fornecedor-registration.service';

describe('FornecedorRegistrationService', () => {
  let service: FornecedorRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FornecedorRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
