import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPalabraComponent } from './ingresar-palabra.component';

describe('IngresarPalabraComponent', () => {
  let component: IngresarPalabraComponent;
  let fixture: ComponentFixture<IngresarPalabraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarPalabraComponent]
    });
    fixture = TestBed.createComponent(IngresarPalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
