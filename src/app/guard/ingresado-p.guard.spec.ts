import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ingresadoPGuard } from './ingresado-p.guard';

describe('ingresadoPGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ingresadoPGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
