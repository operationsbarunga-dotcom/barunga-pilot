import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faqsection } from './faqsection';

describe('Faqsection', () => {
  let component: Faqsection;
  let fixture: ComponentFixture<Faqsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Faqsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faqsection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
