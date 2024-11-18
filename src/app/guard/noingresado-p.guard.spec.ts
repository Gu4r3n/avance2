import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noingresadoPGuard } from './noingresado-p.guard';

describe('noingresadoPGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noingresadoPGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
