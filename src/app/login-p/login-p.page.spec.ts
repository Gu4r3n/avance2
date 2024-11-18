import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPPage } from './login-p.page';

describe('LoginPPage', () => {
  let component: LoginPPage;
  let fixture: ComponentFixture<LoginPPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
