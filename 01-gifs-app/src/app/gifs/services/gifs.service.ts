import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../inteface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private base: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'vfV8SOvefLtVRj5pOOTcRZgepQ0zs29o';
  private _historial: string[] = [];
  
  //TODO: Cambiar any por su tipo
  private resultados: Gif[] = [];
  
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
   }
  
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

      // save busqueda en localStorage
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
              .set('api_key', this.apiKey)
              .set('limit', 10)
              .set('q', query)


    this.http.get<SearchGifsResponse>(`${this.base}/search`, {params})
      .subscribe((resp) => {
        console.log('resp http: ', resp.data)
        this.resultados = resp.data;
        // LS tiene limite de 50MB
        localStorage.setItem('resultados',JSON.stringify(this.resultados)); 
      })
  }
  public getResultados() {
    return this.resultados;

  }
}
