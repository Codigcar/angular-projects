import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador-todo.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})

export class ContadorModule {}