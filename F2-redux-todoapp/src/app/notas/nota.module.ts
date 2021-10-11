import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaAddComponent } from './nota-add/nota-add.component';
import { NotaFooterComponent } from './nota-footer/nota-footer.component';
import { NotaItemComponent } from './nota-item/nota-item.component';
import { NotaListComponent } from './nota-list/nota-list.component';
import { NotaPageComponent } from './nota-page/nota-page.component';



@NgModule({
  declarations: [
    NotaAddComponent,
    NotaFooterComponent,
    NotaItemComponent,
    NotaListComponent,
    NotaPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NotaPageComponent
  ]
})
export class NotaModule { }
