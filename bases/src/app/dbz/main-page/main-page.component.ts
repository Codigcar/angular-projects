import { Component, OnInit } from '@angular/core';

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
    console.log('formulario submit con ngSubmit ');
  }
}
