import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperaPPage } from './recupera-p.page';

describe('RecuperaPPage', () => {
  let component: RecuperaPPage;
  let fixture: ComponentFixture<RecuperaPPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperaPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
