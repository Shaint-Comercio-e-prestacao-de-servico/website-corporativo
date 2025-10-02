import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactosComponent } from './form-contactos.component';

describe('FormContactosComponent', () => {
  let component: FormContactosComponent;
  let fixture: ComponentFixture<FormContactosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormContactosComponent]
    });
    fixture = TestBed.createComponent(FormContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
