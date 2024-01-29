import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdAccordion } from './accordion.component';

describe('AccordeonComponent', () => {
  let component: NgbdAccordion;
  let fixture: ComponentFixture<NgbdAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdAccordion ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbdAccordion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
