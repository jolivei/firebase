import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaFormComponent } from './carta-form.component';

describe('CartaFormComponent', () => {
  let component: CartaFormComponent;
  let fixture: ComponentFixture<CartaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
