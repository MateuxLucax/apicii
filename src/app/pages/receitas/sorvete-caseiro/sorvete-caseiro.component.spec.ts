import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorveteCaseiroComponent } from './sorvete-caseiro.component';

describe('SorveteCaseiroComponent', () => {
  let component: SorveteCaseiroComponent;
  let fixture: ComponentFixture<SorveteCaseiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorveteCaseiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorveteCaseiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
