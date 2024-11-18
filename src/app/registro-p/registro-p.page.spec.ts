import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPPage } from './registro-p.page';

describe('RegistroPPage', () => {
  let component: RegistroPPage;
  let fixture: ComponentFixture<RegistroPPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
