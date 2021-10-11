import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStoreI } from '../redux/app.reducers.interface';
import * as actions from '../redux/contador.action';

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

  constructor(private store: Store<AppStoreI>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  public multiplicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.multiplicarActions({numero:10}));
  }
  
  public dividir() {
    this.store.dispatch(actions.dividirActions({numero:2}));
  }

  // public resetNieto(nuevoContador: number) {
  //   // this.contador = nuevoContador;
  //   // this.cambioContador.emit(this.contador);
  // }

}
