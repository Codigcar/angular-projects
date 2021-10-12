import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NotaClass } from '../models/nota.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nota-item',
  templateUrl: './nota-item.component.html',
  styleUrls: ['./nota-item.component.scss']
})
export class NotaItemComponent implements OnInit {

  @Input()
  public notaChild!: NotaClass;

  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  public checkCompletado!: FormControl;
  public txtInput!: FormControl;
  public editando: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.checkCompletado = new FormControl(this.notaChild.completado);
    this.txtInput = new FormControl(this.notaChild.texto, Validators.required);
  }

  public editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  public terminarEdicion(){
    this.editando=false;
  }

}
