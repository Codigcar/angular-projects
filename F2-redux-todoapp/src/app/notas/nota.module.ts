import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaAddComponent } from './nota-add/nota-add.component';
import { NotaFooterComponent } from './nota-footer/nota-footer.component';
import { NotaItemComponent } from './nota-item/nota-item.component';
import { NotaListComponent } from './nota-list/nota-list.component';
import { NotaPageComponent } from './nota-page/nota-page.component';

// formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotaAddComponent,
    NotaFooterComponent,
    NotaItemComponent,
    NotaListComponent,
    NotaPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    NotaPageComponent
  ]
})
export class NotaModule { }
