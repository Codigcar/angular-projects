import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { NotaClass } from '../models/nota.model';
import { AppStateI } from '../redux/app.reducer.interface';

@Component({
  selector: 'app-nota-list',
  templateUrl: './nota-list.component.html',
  styleUrls: ['./nota-list.component.scss']
})
export class NotaListComponent implements OnInit {

  public notas: NotaClass[] = [];

  constructor(private store: Store<AppStateI>) { }

  ngOnInit(): void {
    this.store.select('notas').subscribe(notas => this.notas = notas);
  }

}
