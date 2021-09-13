import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  // Inicializar servicio
  constructor(private GifsService: GifsService) {  }

  ngOnInit(): void {
  }

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {
    // get valor del input mediante etiqueta
    const valor = this.txtBuscar.nativeElement.value;

    // Validar si es vacio
    if( valor.trim().length === 0 ){
      return;
    }
    
    // imprimir valor
    console.log('valor input: ', valor);

    // service
    this.GifsService.buscarGifs(valor);

    // clean
    this.txtBuscar.nativeElement.value = "";

  }

}
