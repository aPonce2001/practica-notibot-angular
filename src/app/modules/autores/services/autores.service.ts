import { ApiDirecciones } from './../../../shared/values/apiDirecciones';
import { Injectable } from '@angular/core';
import { Autor } from '../models/autor.model';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
import { Noticia } from '../../noticias/models/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private BASE_URL:string = ApiDirecciones.URL + 'autores/';

  static autorSeleccionado: Autor = {
    nombre: '',
    apellido: '',
    correo: ''
  };

  static autorSeleccionadoBackup: Autor = {
    nombre: '',
    apellido: '',
    correo: ''
  }

  static sePuedeBorrarSeleccionado: Boolean = true;

  private autoresSubject: BehaviorSubject<Autor[]> = new BehaviorSubject<Autor[]>([]);

  constructor(private http: HttpClient) {
    this.actualizarListaAutores();
  }
  
  actualizarListaAutores() {
    this.http.get<Autor[]>(this.BASE_URL).subscribe(
      (nuevaListaAutores) => {
        this.autoresSubject.next(nuevaListaAutores);
      }
    );
  }

  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.BASE_URL);
  }

  getAutor(id: number): Observable<Autor> {
    return this.http.get<Autor>(this.BASE_URL + 'buscarID?id=' + id);
  }

  createAutor(autor: Autor): Observable<Boolean> {
    return this.http.post<Boolean>(this.BASE_URL + 'crear', autor);
  }

  updateAutor(autor: Autor): Observable<Boolean> {
    return this.http.put<Boolean>(this.BASE_URL + 'actualizar', autor);
  }

  deleteAutor(id: number): Observable<Boolean> {
    return this.http.delete<Boolean>(this.BASE_URL + 'borrar?id=' + id);
  }

  sePuedeBorrar(id: number): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(ApiDirecciones.URL + 'noticias/buscarPorAutorId?idAutor=' + id);
  }

  get observableAutores(): Observable<Autor[]> {
    return this.autoresSubject.asObservable();
  }
}
