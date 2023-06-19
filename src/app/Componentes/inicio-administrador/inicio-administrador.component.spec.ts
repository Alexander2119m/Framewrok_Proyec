import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAdministradorComponent } from './inicio-administrador.component';

describe('InicioAdministradorComponent', () => {
  let component: InicioAdministradorComponent;
  let fixture: ComponentFixture<InicioAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioAdministradorComponent]
    });
    fixture = TestBed.createComponent(InicioAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
