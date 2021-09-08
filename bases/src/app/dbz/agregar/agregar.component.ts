import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
  @Input()
  personajes: Personaje[] = [];

  @Input()
  nuevo: Personaje = {
    nombre:'',
    poder:0 ,
  }

  // @Output() onNuevoPersonaje: EventEmii = new EventEmitter();
  // Emitir eventos, siempre especificar un tipo (interface o Any)
  @Output() onNuevoPersonaje: EventEmitter<Personaje>= new EventEmitter();

   // Con ngSubmit de Angular
   agregar = () => {
    console.log('formulario submit con ngSubmit: ', this.nuevo);
    if (this.nuevo.nombre.trim().length === 0){
      console.log('Nombre no puedo ir vacio');
      return;
    }

    // Emitir Output
    this.onNuevoPersonaje.emit(this.nuevo);

    // this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder:0
    }
    console.log('personajes: ',this.personajes);
    
  }
}
