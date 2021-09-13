import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private _historial: string[] = [];

  get historial() {
    // romper la referencia con el operator spret, enviando una copia y no afectando al princiapl
    return [...this._historial];
  }

  buscarGifs = (query:string) => {
    this._historial.push(query);
    // insertar al inicio
    // this._historial.unshift(query);
    console.log(this._historial);
    
  }
}
