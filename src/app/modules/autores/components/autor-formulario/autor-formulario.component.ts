import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutoresService } from '../../services/autores.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-autor-formulario',
  templateUrl: './autor-formulario.component.html',
  styleUrls: ['./autor-formulario.component.css']
})
export class AutorFormularioComponent {

  constructor(private servicioAutores: AutoresService, private snackBar: MatSnackBar) { }

  formularioAutor = new FormGroup({
    'nombre': new FormControl(
      '',
      Validators.required
    ),
    'apellido': new FormControl(
      '',
      Validators.required
    ),
    'correo': new FormControl(
      '',
      [Validators.required, Validators.email]
    )
  })

  get nombre() {
    return this.formularioAutor.get('nombre') as FormControl;
  }

  get apellido() {
    return this.formularioAutor.get('apellido') as FormControl;
  }

  get correo() {
    return this.formularioAutor.get('correo') as FormControl;
  }

  get autorSeleccionado() {
    return AutoresService.autorSeleccionado;
  }

  crearAutor() {
    this.servicioAutores.createAutor(this.autorSeleccionado).subscribe({
      next: (next: Boolean) => {
        if (next) {
          AutoresService.autorSeleccionado = { nombre: '', apellido: '', correo: '' };
          AutoresService.autorSeleccionadoBackup = { nombre: '', apellido: '', correo: '' };
          this.servicioAutores.actualizarListaAutores();
          this.formularioAutor.reset();
          this.mostrarMensaje('El autor ha sido creado correctamente');
        } else {
          this.mostrarMensaje('Ha ocurrido un error al crear el autor. Por favor, intente más tarde');
        }
      }
    });
  }

  actualizarAutor() {
    this.servicioAutores.updateAutor(this.autorSeleccionado).subscribe({
      next: (next: Boolean) => {
        if (next) {
          AutoresService.autorSeleccionado = { nombre: '', apellido: '', correo: '' };
          AutoresService.autorSeleccionadoBackup = { nombre: '', apellido: '', correo: '' };
          this.servicioAutores.actualizarListaAutores();
          this.formularioAutor.reset();
          this.mostrarMensaje('El autor ha sido actualizado correctamente');
        } else {
          this.mostrarMensaje('Ha ocurrido un error al actualizar el autor. Por favor, intente más tarde');
        }
      }
    });
  }

  deleteAutor() {
    console.log(this.autorSeleccionado.id);
    this.servicioAutores.deleteAutor(this.autorSeleccionado.id || 0).subscribe({
      next: (next) => {
        if(next) {
          AutoresService.autorSeleccionado = { nombre: '', apellido: '', correo: '' };
          AutoresService.autorSeleccionadoBackup = { nombre: '', apellido: '', correo: '' };
          this.servicioAutores.actualizarListaAutores();
          this.formularioAutor.reset();
          this.mostrarMensaje('El autor ha sido eliminado correctamente');
        } else {
          this.mostrarMensaje('Ha ocurrido un error al eliminar el autor. Por favor, intente más tarde');
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  get autorSeleccionadoBackup() {
    return AutoresService.autorSeleccionadoBackup;
  }

  get sePuedeBorrar(): Boolean {
    return AutoresService.sePuedeBorrarSeleccionado;
  }

  cancelar() {
    const backup = AutoresService.autorSeleccionadoBackup;
    this.nombre.setValue(backup.nombre);
    this.apellido.setValue(backup.apellido);
    this.correo.setValue(backup.correo);
    AutoresService.autorSeleccionado = { nombre: '', apellido: '', correo: '' };
    AutoresService.autorSeleccionadoBackup = { nombre: '', apellido: '', correo: '' };
    this.formularioAutor.reset();
  }

  private mostrarMensaje(mensaje: string) {
    this.snackBar.open(mensaje, "Cerrar", {
      duration: 3000 // Duración del mensaje en milisegundos
    });
  }
}
