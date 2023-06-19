import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioesComponent } from './horarioes.component';

describe('HorarioesComponent', () => {
  let component: HorarioesComponent;
  let fixture: ComponentFixture<HorarioesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorarioesComponent]
    });
    fixture = TestBed.createComponent(HorarioesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
