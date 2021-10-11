import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {


  @Input()
  public contador!: number;

  @Output()
  public cambioContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public multiplicar() {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  public dividir() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  public resetNieto(nuevoContador: number) {
    this.contador = nuevoContador;
    this.cambioContador.emit(this. contador);
  }

}
