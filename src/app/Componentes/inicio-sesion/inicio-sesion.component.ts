import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    const loginForm = document.querySelector('#loginForm') as HTMLFormElement;

    loginForm.addEventListener('submit', (e: Event) => {
      e.preventDefault(); // prevenir el envío del formulario

      const username = (<HTMLInputElement>document.querySelector('#username')).value;
      const password = (<HTMLInputElement>document.querySelector('#password')).value;

      if (username === 'Admin' && password === 'a1234') {
        this.router.navigate(['inicio-administrador']); // redirigir al administrador
      } else if (username === 'estudiante' && password === '123') {
        this.router.navigate(['inicio-estudiante']); // redirigir al cualquier estudiante
      } else {
       // mostrar mensaje de error
        this.toastr.success('o contraseña incorrectos','Usuario');
      }
    });
  }
}
