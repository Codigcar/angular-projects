import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Sin ngSubmit de Angular
  
  // agregar = (event: any) => {
    //   // Evitar el refresh al presionar el buton en el formulario
    //   event.preventDefault();
    //   console.log('formulario submit');
    
    // }
    
  // Con ngSubmit de Angular
  agregar = () => {
    console.log('formulario submit con ngSubmit: ', this.nuevo);
  }

  nuevo:Personaje = {
    nombre: 'Goku',
    poder: 2000
  }

  // Esto es para sin NgModel
  // cambiarNombre = (event:any) => {
  //   console.log('Nombre event.target.value: ',event.target.value);
  //   this.nuevo.nombre = event.target.value;
  // }

  // cambiarPoder = (event:any) => {
  //   console.log('Poder event.target.value: ',event.target.value);
  //   this.nuevo.poder = event.target.value;
  // }
}
