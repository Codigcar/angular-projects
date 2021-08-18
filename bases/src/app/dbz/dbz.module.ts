import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
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
