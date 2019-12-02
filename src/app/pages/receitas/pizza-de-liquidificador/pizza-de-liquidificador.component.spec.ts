import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDeLiquidificadorComponent } from './pizza-de-liquidificador.component';

describe('PizzaDeLiquidificadorComponent', () => {
  let component: PizzaDeLiquidificadorComponent;
  let fixture: ComponentFixture<PizzaDeLiquidificadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDeLiquidificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDeLiquidificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
