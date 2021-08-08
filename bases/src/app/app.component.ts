import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'Contador App';
  public numero: number = 10;
  public base: number = 5;

  sumar = () => {
    this.numero += 1;
  };

  restar = () => {
    this.numero -= 1;
  }

  acumular = (valor: number) => {
    this.numero += valor;
  }


}
