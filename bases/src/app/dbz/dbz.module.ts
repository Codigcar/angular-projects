import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    // Para manejar el submit del formulario
    FormsModule
  ]
})
export class DbzModule { }
