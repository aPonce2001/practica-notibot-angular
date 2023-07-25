import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorCardComponent } from './autor-card.component';

describe('AutorCardComponent', () => {
  let component: AutorCardComponent;
  let fixture: ComponentFixture<AutorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutorCardComponent]
    });
    fixture = TestBed.createComponent(AutorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
