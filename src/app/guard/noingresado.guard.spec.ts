import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noingresadoGuard } from './noingresado.guard';

describe('noingresadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noingresadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
