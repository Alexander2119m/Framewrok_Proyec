import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigHorarioComponent } from './config-horario.component';

describe('ConfigHorarioComponent', () => {
  let component: ConfigHorarioComponent;
  let fixture: ComponentFixture<ConfigHorarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigHorarioComponent]
    });
    fixture = TestBed.createComponent(ConfigHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
