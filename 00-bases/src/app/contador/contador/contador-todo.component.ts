
import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    // template: `
    //             <h1>App-Contador-Component</h1>
    // `,
    templateUrl: './contador-todo.component.html',

})

export class ContadorComponent {
    public title: string = 'Contador App';
    public numero: number = 100;
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