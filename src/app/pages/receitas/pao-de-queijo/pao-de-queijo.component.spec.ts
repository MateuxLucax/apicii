import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaoDeQueijoComponent } from './pao-de-queijo.component';

describe('PaoDeQueijoComponent', () => {
  let component: PaoDeQueijoComponent;
  let fixture: ComponentFixture<PaoDeQueijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaoDeQueijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaoDeQueijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
