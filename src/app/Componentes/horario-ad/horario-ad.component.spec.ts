import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioADComponent } from './horario-ad.component';

describe('HorarioADComponent', () => {
  let component: HorarioADComponent;
  let fixture: ComponentFixture<HorarioADComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorarioADComponent]
    });
    fixture = TestBed.createComponent(HorarioADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
