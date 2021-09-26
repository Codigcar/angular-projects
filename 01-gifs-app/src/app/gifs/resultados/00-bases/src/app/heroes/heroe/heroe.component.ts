import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.comoponent.html'
})
export class HeroeComponent{ 
    nombre: string = 'Batman';
    edad: number = 55;

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    NombreCapitalizado(nombre:string):string {
        return nombre.toUpperCase();
    }
    
    // get y set
    get getNombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void {
        this.nombre = 'Linterna Verde';
    }

    cambiarEdad():void {
        this.edad = 10;
    }
}