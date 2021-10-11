import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStoreI } from '../redux/app.reducers.interface';
import { resetActions } from '../redux/contador.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  @Input()
  public contador!: number;

  constructor(
    private store: Store<AppStoreI>
  ) { }

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe(contador => this.contador = contador);
  }

  reset() {
    this.store.dispatch(resetActions());
  }

}
