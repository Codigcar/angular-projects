import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateI } from '../redux/app.reducer';
import * as actions from '../redux/filtro.actions';
import { filtrosValidos } from '../redux/filtro.actions';

@Component({
  selector: 'app-nota-footer',
  templateUrl: './nota-footer.component.html',
  styleUrls: ['./nota-footer.component.scss'],
})
export class NotaFooterComponent implements OnInit {
  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = [ 'todos','completados', 'pendientes'];

  constructor(private store: Store<AppStateI>) {}

  ngOnInit(): void {
    this.store
      .select('filtro')
      .subscribe((filtro) => (this.filtroActual = filtro));
  }

  public cambiarFiltro(filtro: actions.filtrosValidos){
    console.log('filtroActual: ',filtro);
    this.store.dispatch(actions.setFiltroAction({filtro:filtro}))
    
    
  }
}
