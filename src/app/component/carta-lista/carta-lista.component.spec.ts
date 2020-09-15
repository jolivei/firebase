import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaListaComponent } from './carta-lista.component';

describe('CartaListaComponent', () => {
  let component: CartaListaComponent;
  let fixture: ComponentFixture<CartaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
