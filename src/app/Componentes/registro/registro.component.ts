import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      cedula: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  registrar(): void {
    if (this.registroForm.invalid) {
      alert('Por favor llene todos los campos');
      return;
    }

    const username = this.registroForm.get('username');
    const password = this.registroForm.get('password');
    const email = this.registroForm.get('email');
    const cedula = this.registroForm.get('cedula');

    if (username?.value === '' || password?.value === '' || email?.value === '' || cedula?.value === '') {
      alert('Por favor llene todos los campos');
      return;
    }

    const emailRegex = /^[^\s@]+@(live\.uleam\.edu\.ec)$/;
    if (!emailRegex.test(email?.value)) {
      alert('Por favor ingrese un correo electrónico válido (@live.uleam.edu.ec)');
      return;
    }

    if (isNaN(cedula?.value) || cedula?.value.length !== 10) {
      alert('Por favor ingrese un número de cédula válido');
      return;
    }

    const correosRegistrados = ['e1315498525@live.uleam.edu.ec', 'e1315498523@live.uleam.edu.ec', 'correo3@example.com'];
    if (correosRegistrados.includes(email?.value)) {
      alert('El correo electrónico ya está registrado');
      return;
    }

    if (password?.value.length < 8) {
      alert('La contraseña debe tener como mínimo 8 caracteres');
      return;
    }

    alert('Registro exitoso!');
  }

  
}
