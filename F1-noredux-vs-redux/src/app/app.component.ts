import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noredux-vs-redux';

  public contador: number;

  constructor() {
    this.contador = 30;
  }

  public incrementar(){
    this.contador++;
  }

  public decrementar(){
    this.contador--;
  }

}
