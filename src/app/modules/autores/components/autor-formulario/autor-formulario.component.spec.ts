import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorFormularioComponent } from './autor-formulario.component';

describe('AutorFormularioComponent', () => {
  let component: AutorFormularioComponent;
  let fixture: ComponentFixture<AutorFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutorFormularioComponent]
    });
    fixture = TestBed.createComponent(AutorFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
