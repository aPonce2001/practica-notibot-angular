import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../../services/autores.service';
import { Autor } from '../../models/autor.model';

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.css']
})
export class ListaAutoresComponent implements OnInit {

  listaAutores: Autor[] = [];

  constructor(private servicioAutores: AutoresService) { }

  ngOnInit() {
    this.servicioAutores.observableAutores.subscribe(data => {
      this.listaAutores = data;
    });
  }

  set autorSeleccionado(autor: Autor) {
    AutoresService.autorSeleccionado = autor;
  }

  get autorSeleccionado(): Autor {
    return AutoresService.autorSeleccionado;
  }

  seleccionarAutor(autor: Autor) {
    const backup = AutoresService.autorSeleccionadoBackup
    if (backup.id != null) {
      this.autorSeleccionado.id = backup.id;
      this.autorSeleccionado.nombre = backup.nombre;
      this.autorSeleccionado.apellido = backup.apellido;
      this.autorSeleccionado.correo = backup.correo;
    }
    this.autorSeleccionado = autor;
    this.servicioAutores.sePuedeBorrar(this.autorSeleccionado.id || -1).subscribe({
      next: (next) => {
        AutoresService.sePuedeBorrarSeleccionado = next.length == 0;
      }
    });
    AutoresService.autorSeleccionadoBackup = { ...autor }
  }
}
