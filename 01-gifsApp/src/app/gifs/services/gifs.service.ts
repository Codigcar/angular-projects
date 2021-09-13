import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) { }

  
  private _historial: string[] = [];
  

  
  
  get historial() {
    // romper la referencia con el operator spret, enviando una copia y no afectando al princiapl
    return [...this._historial];
  }
  
  buscarGifs = (query:string = '') => {
    
    query = query.trim().toLocaleLowerCase();
    
    // No ingresar repetidos
    if(!this._historial.includes(query)){
      // Insertar al ultimo
      // this._historial.push(query);
      
      // insertar al inicio
      this._historial.unshift(query);
      
      // Devolver solo los 10 primeros
      this._historial = this._historial.splice(0,10);
      
      console.log('array: ', this._historial);
      
      this.http.get("https://api.giphy.com/v1/gifs/search?api_key=vfV8SOvefLtVRj5pOOTcRZgepQ0zs29o&q=Naruto&limit=10")
            .subscribe(resp => {console.log('resp http: ', resp)})
    }

    
  }
}
