import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { 
    // el constructor se ejecuta antes de renderizar el html
    console.log('constructor');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit');
    // inicializar cosas
    // ejem: si se hace alguna peticion en algun servicio y patraer la info
  }

}
