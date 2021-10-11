import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStoreI } from './contador/redux/app.reducers.interface';
import { decrementarActions, incrementarActions } from './contador/redux/contador.action';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noredux-vs-redux';

  public contador: number;

  constructor(private store: Store<AppStoreI>) {
    this.contador = 30;
    this.store.subscribe(state => {
      console.log(state);
      this.contador = state.contador;
    })

    // // traer solo un selector del store
    // this.store.select('contador').subscribe(contador => this.contador=contador);
  }

  public incrementar() {
    // this.contador++;
    this.store.dispatch(incrementarActions());
  }

  public decrementar() {
    // this.contador--;
    this.store.dispatch(decrementarActions());
  }

}
