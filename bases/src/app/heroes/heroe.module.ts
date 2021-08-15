import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Que cosa contienen el modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Que cosas quiero que sea visible afuera de este modulo
    exports: [
        ListadoComponent
    ],
    // aqui dentro van solo módulos, objetos que se colocan en los imports
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}
