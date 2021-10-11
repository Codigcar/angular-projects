import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaAddComponent } from './nota-add/nota-add.component';
import { NotaFooterComponent } from './nota-footer/nota-footer.component';
import { NotaItemComponent } from './nota-item/nota-item.component';
import { NotaListComponent } from './nota-list/nota-list.component';



@NgModule({
  declarations: [
    NotaAddComponent,
    NotaFooterComponent,
    NotaItemComponent,
    NotaListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotaModule { }
