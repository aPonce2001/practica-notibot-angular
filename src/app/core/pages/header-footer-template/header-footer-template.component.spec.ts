import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFooterTemplateComponent } from './header-footer-template.component';

describe('HeaderFooterTemplateComponent', () => {
  let component: HeaderFooterTemplateComponent;
  let fixture: ComponentFixture<HeaderFooterTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderFooterTemplateComponent]
    });
    fixture = TestBed.createComponent(HeaderFooterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
