import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoloDeCanecaComponent } from './bolo-de-caneca.component';

describe('BoloDeCanecaComponent', () => {
  let component: BoloDeCanecaComponent;
  let fixture: ComponentFixture<BoloDeCanecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoloDeCanecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoloDeCanecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
