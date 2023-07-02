import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPalabraComponent } from './agregar-palabra.component';

describe('CargarPalabraComponent', () => {
  let component: AgregarPalabraComponent;
  let fixture: ComponentFixture<AgregarPalabraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarPalabraComponent];
    });
    fixture = TestBed.createComponent(AgregarPalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
