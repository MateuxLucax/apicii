import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PudimDeLeiteComponent } from './pudim-de-leite.component';

describe('PudimDeLeiteComponent', () => {
  let component: PudimDeLeiteComponent;
  let fixture: ComponentFixture<PudimDeLeiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PudimDeLeiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PudimDeLeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
