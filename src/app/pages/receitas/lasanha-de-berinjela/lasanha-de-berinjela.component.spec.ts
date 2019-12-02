import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LasanhaDeBerinjelaComponent } from './lasanha-de-berinjela.component';

describe('LasanhaDeBerinjelaComponent', () => {
  let component: LasanhaDeBerinjelaComponent;
  let fixture: ComponentFixture<LasanhaDeBerinjelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LasanhaDeBerinjelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LasanhaDeBerinjelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
