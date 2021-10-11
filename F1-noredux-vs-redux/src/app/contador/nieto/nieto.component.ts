import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  @Input()
  public contador!:number;
  @Output() 
  public contadorCambio = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  reset(){
    this.contador = 0;
    this.contadorCambio.emit(this.contador);
  }

}
