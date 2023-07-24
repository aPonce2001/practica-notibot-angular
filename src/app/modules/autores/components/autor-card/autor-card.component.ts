import { Component, Input } from '@angular/core';
import { Autor } from '../../models/autor.model';
import { AutoresService } from '../../services/autores.service';

@Component({
  selector: 'app-autor-card',
  templateUrl: './autor-card.component.html',
  styleUrls: ['./autor-card.component.css']
})
export class AutorCardComponent {
  @Input() autor: Autor = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: ''
  };

  constructor() {}

  get autorSeleccionado(): Autor {
    return AutoresService.autorSeleccionado;
  }
}
