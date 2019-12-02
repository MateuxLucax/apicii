import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadeiraoGourmetComponent } from './brigadeirao-gourmet.component';

describe('BrigadeiraoGourmetComponent', () => {
  let component: BrigadeiraoGourmetComponent;
  let fixture: ComponentFixture<BrigadeiraoGourmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrigadeiraoGourmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrigadeiraoGourmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
