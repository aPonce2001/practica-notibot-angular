import { Autor } from "../../autores/models/autor.model"

export interface Noticia { 
    id?: number,
    title: string,
    cuerpo: string,
    autor: Autor,
    fecha: string
}