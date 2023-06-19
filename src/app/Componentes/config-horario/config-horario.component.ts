import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-config-horario',
  templateUrl: './config-horario.component.html',
  styleUrls: ['./config-horario.component.css']
})
export class ConfigHorarioComponent {
  selectSemestre: HTMLSelectElement;
  tituloSemestre: HTMLHeadingElement;
  tablaHorario: HTMLTableElement;

  
  constructor(private toastr: ToastrService) {
    this.selectSemestre = document.querySelector('#semestre') as HTMLSelectElement;
    this.tituloSemestre = document.querySelector('#titulo-semestre') as HTMLHeadingElement;
    this.tablaHorario = document.getElementById("tabla-horario") as HTMLTableElement;
  
  }

  ngOnInit(): void {
    this.selectSemestre = document.querySelector('#semestre') as HTMLSelectElement;
    this.tituloSemestre = document.querySelector('#titulo-semestre') as HTMLHeadingElement;
    this.tablaHorario = document.getElementById('tabla-horario') as HTMLTableElement;

    this.selectSemestre.addEventListener('change', () => {
      const semestreSeleccionado = this.selectSemestre.options[this.selectSemestre.selectedIndex].text;
      this.tituloSemestre.textContent = semestreSeleccionado;
    });
  }
  
  agregarRegistro(): void {
    const semestre = (document.querySelector('#semestre') as HTMLSelectElement).value;
    const dia = (document.querySelector('#dia') as HTMLSelectElement).value;
    const hora = (document.querySelector('#hora') as HTMLSelectElement).value;
    const curso = (document.querySelector('#curso') as HTMLSelectElement).value;
    const profesor = (document.querySelector('#profesor') as HTMLSelectElement).value;
  
    const filas = this.tablaHorario.getElementsByTagName('tr');
  
    let filaExistente = false;
    for (let i = 1; i < filas.length; i++) {
      const celdas = filas[i].getElementsByTagName('td');
      if (
        celdas[0].textContent === semestre &&
        celdas[1].textContent === dia &&
        celdas[2].textContent === hora &&
        celdas[3].textContent === curso &&
        celdas[4].textContent === profesor
      ) {
        filaExistente = true;
        break;
      }
    }
  
    if (filaExistente) {
      this.toastr.success('Ya existente', 'Fila', {
        toastClass: 'toast-error',
        closeButton: true
      });
    } else {
      const nuevaFila = document.createElement('tr');
      const celdaSemestre = document.createElement('td');
      celdaSemestre.textContent = semestre;
      nuevaFila.appendChild(celdaSemestre);
      const celdaDia = document.createElement('td');
      celdaDia.textContent = dia;
      nuevaFila.appendChild(celdaDia);
      const celdaHora = document.createElement('td');
      celdaHora.textContent = hora;
      nuevaFila.appendChild(celdaHora);
      const celdaCurso = document.createElement('td');
      celdaCurso.textContent = curso;
      nuevaFila.appendChild(celdaCurso);
      const celdaProfesor = document.createElement('td');
      celdaProfesor.textContent = profesor;
      nuevaFila.appendChild(celdaProfesor);
      const celdaAcciones = document.createElement('td');
  
      nuevaFila.appendChild(celdaAcciones);
      this.tablaHorario.appendChild(nuevaFila);
  
      this.toastr.success('Agregado con éxito', 'Fila');
    }
  }
  
  

  editarRegistro(event: Event): void {
    const botonEditar = event.target as HTMLButtonElement;
    const fila = botonEditar.parentNode?.parentNode as HTMLTableRowElement;
    const celdas = fila.getElementsByTagName("td");
  
    const semestreActual = celdas[0].textContent;
    const diaActual = celdas[1].textContent;
    const horaActual = celdas[2].textContent;
    const cursoActual = celdas[3].textContent;
    const profesorActual = celdas[4].textContent;
  
    const semestreInput = document.createElement("input");
    semestreInput.type = "text";
    semestreInput.value = semestreActual || '';
    celdas[0].innerHTML = '';
    celdas[0].appendChild(semestreInput);
  
    const diaInput = document.createElement("input");
    diaInput.type = "text";
    diaInput.value = diaActual || '';
    celdas[1].innerHTML = '';
    celdas[1].appendChild(diaInput);
  
    const horaInput = document.createElement("input");
    horaInput.type = "text";
    horaInput.value = horaActual || '';
    celdas[2].innerHTML = '';
    celdas[2].appendChild(horaInput);
  
    const cursoInput = document.createElement("input");
    cursoInput.type = "text";
    cursoInput.value = cursoActual || '';
    celdas[3].innerHTML = '';
    celdas[3].appendChild(cursoInput);
  
    const profesorInput = document.createElement("input");
    profesorInput.type = "text";
    profesorInput.value = profesorActual || '';
    celdas[4].innerHTML = '';
    celdas[4].appendChild(profesorInput);
  
    const guardarButton = document.createElement("button");
    guardarButton.textContent = "Guardar";
    guardarButton.addEventListener("click", () => {
      this.toastr.success('Guardado exisosamente ','Datos');
      const semestreNuevo = semestreInput.value;
      const diaNuevo = diaInput.value;
      const horaNueva = horaInput.value;
      const cursoNuevo = cursoInput.value;
      const profesorNuevo = profesorInput.value;
  
      celdas[0].textContent = semestreNuevo;
      celdas[1].textContent = diaNuevo;
      celdas[2].textContent = horaNueva;
      celdas[3].textContent = cursoNuevo;
      celdas[4].textContent = profesorNuevo;
  
      // Aquí puedes realizar cualquier acción adicional después de guardar los datos
  
      celdas[0].innerHTML = semestreNuevo;
      celdas[1].innerHTML = diaNuevo;
      celdas[2].innerHTML = horaNueva;
      celdas[3].innerHTML = cursoNuevo;
      celdas[4].innerHTML = profesorNuevo;
    });
  
    celdas[5].innerHTML = '';
    celdas[5].appendChild(guardarButton);
  }
  
    eliminarRegistro(event: MouseEvent): void {
    const botonEliminar = event.target as HTMLButtonElement;
    if (botonEliminar) {
      const fila = botonEliminar.parentNode?.parentNode as HTMLTableRowElement;
      
      if (fila && fila.parentNode) {
        fila.parentNode.removeChild(fila);
        this.toastr.success('Eliminado con exito','Fila');
      }
      
  }
} 
}
