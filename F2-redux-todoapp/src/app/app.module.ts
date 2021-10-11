import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ngrx
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotaModule } from './notas/nota.module';
import { FooterComponent } from './footer/footer.component';
import { notaReducer } from './notas/redux/nota.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotaModule,
    StoreModule.forRoot({ notas: notaReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
