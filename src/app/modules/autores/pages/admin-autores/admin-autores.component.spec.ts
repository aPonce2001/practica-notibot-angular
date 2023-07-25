import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAutoresComponent } from './admin-autores.component';

describe('AdminAutoresComponent', () => {
  let component: AdminAutoresComponent;
  let fixture: ComponentFixture<AdminAutoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAutoresComponent]
    });
    fixture = TestBed.createComponent(AdminAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
