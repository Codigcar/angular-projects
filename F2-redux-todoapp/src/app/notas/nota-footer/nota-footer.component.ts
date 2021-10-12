import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateI } from '../redux/app.reducer';
import * as actions from '../redux/filtro.actions';
import { filtrosValidos } from '../redux/filtro.actions';

@Component({
  selector: 'app-nota-footer',
  templateUrl: './nota-footer.component.html',
  styleUrls: ['./nota-footer.component.scss']
})
export class NotaFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos';

  constructor(private store: Store<AppStateI>) { }

  ngOnInit(): void {
  }

}
