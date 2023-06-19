
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { InicioSesionComponent } from './Componentes/inicio-sesion/inicio-sesion.component';
import { InicioEstudianteComponent } from './Componentes/inicio-estudiante/inicio-estudiante.component';
import { HorarioesComponent } from './Componentes/horarioes/horarioes.component';
import { HorarioADComponent } from './Componentes/horario-ad/horario-ad.component';
import { InicioAdministradorComponent } from './Componentes/inicio-administrador/inicio-administrador.component';
import { ConfigHorarioComponent } from './Componentes/config-horario/config-horario.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InicioSesionComponent,
    InicioEstudianteComponent,
    HorarioesComponent,
    HorarioADComponent,
    InicioAdministradorComponent,
    ConfigHorarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
