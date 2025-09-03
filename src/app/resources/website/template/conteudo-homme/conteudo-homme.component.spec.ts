import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoHommeComponent } from './conteudo-homme.component';

describe('ConteudoHommeComponent', () => {
  let component: ConteudoHommeComponent;
  let fixture: ComponentFixture<ConteudoHommeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConteudoHommeComponent]
    });
    fixture = TestBed.createComponent(ConteudoHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


