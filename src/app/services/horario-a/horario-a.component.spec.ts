import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioAComponent } from './horario-a.component';

describe('HorarioAComponent', () => {
  let component: HorarioAComponent;
  let fixture: ComponentFixture<HorarioAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorarioAComponent]
    });
    fixture = TestBed.createComponent(HorarioAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
