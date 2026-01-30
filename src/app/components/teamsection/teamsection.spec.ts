import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teamsection } from './teamsection';

describe('Teamsection', () => {
  let component: Teamsection;
  let fixture: ComponentFixture<Teamsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teamsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teamsection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
