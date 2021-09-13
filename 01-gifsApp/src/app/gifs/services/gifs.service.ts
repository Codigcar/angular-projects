import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) { }

  private apiKey: string = 'vfV8SOvefLtVRj5pOOTcRZgepQ0zs29o';
  private _historial: string[] = [];

  //TODO: Cambiar any por su tipo
  private resultados: any[] = [];


  get historial() {
    // romper la referencia con el operator spret, enviando una copia y no afectando al princiapl
    return [...this._historial];
  }

  public buscarGifs = (query: string = '') => {

    query = query.trim().toLocaleLowerCase();

    // No ingresar repetidos
    if (!this._historial.includes(query)) {
      // Insertar al ultimo
      // this._historial.push(query);

      // insertar al inicio
      this._historial.unshift(query);

      // Devolver solo los 10 primeros
      this._historial = this._historial.splice(0, 10);

      console.log('array: ', this._historial);

      this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
        .subscribe((resp: any) => {
          console.log('resp http: ', resp.data)
          this.resultados = resp.data;
        })
    }

  }
  public getResultados() {
    return this.resultados;

  }
}