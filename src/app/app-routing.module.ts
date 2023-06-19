import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './Componentes/inicio-sesion/inicio-sesion.component';
import { InicioEstudianteComponent } from './Componentes/inicio-estudiante/inicio-estudiante.component';
import { HorarioesComponent } from './Componentes/horarioes/horarioes.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { HorarioADComponent } from './Componentes/horario-ad/horario-ad.component';
import { InicioAdministradorComponent } from './Componentes/inicio-administrador/inicio-administrador.component';
import { ConfigHorarioComponent } from './Componentes/config-horario/config-horario.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio-sesion', pathMatch: 'full' },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'inicio-estudiante', component: InicioEstudianteComponent },
  { path: 'horarioes', component: HorarioesComponent },
  {path: 'registro', component: RegistroComponent },
  {path: 'horario-ad', component: HorarioADComponent },
  {path: 'inicio-administrador', component: InicioAdministradorComponent },
  {path: 'config-horario', component: ConfigHorarioComponent },
  // Otros componentes y rutas de tu aplicación
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


