import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaListaClientesComponent } from './carta-lista-clientes.component';

describe('CartaListaClientesComponent', () => {
  let component: CartaListaClientesComponent;
  let fixture: ComponentFixture<CartaListaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaListaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaListaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
