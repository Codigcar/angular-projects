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

  agregar = (event: any) => {
    // Evitar el refresh al presionar el buton en el formulario
    event.preventDefault();
    console.log('formulario submit');
    
  }
}
