import { TestBed } from '@angular/core/testing';

import { FabricanteService } from './fabrProd.service';

describe('FabricanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabricanteService = TestBed.get(FabricanteService);
    expect(service).toBeTruthy();
  });
});
