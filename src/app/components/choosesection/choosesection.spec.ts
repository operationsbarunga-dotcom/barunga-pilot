import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Choosesection } from './choosesection';

describe('Choosesection', () => {
  let component: Choosesection;
  let fixture: ComponentFixture<Choosesection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Choosesection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Choosesection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
