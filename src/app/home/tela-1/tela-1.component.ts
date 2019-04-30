import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA   } from '@angular/material';
import { GlobalService                } from '../shared/service/global.service'

@Component({
  selector: 'app-termo',
  templateUrl: 'termo.html',
  styleUrls: [ './tela-1.component.css' ]
})
export class TermoComponent {
  constructor(
    private dialog: MatDialog,
    private global: GlobalService
  ) {}

  campos: any[] = [
    {
      type: 'checkbox',
      name: 'preferencias',
      label: 'Preferencias',
      required: true,
      options: [
        { key: 'a', label: 'Li e aceito os termos e condições acima' }
      ]
    }
  ]

  retornaColunas() {
    return this.campos;
  }

  submitForm(event){
    this.dialog.closeAll();
    this.global.dadosForm = [];
    this.global.routePagGrade('tela4');
  }

}

@Component({
  selector: 'app-tela-1',
  templateUrl: './tela-1.component.html',
  styleUrls: [ './tela-1.component.css' ]
})
export class Tela1Component implements OnInit  {

  constructor(
    public dialog: MatDialog,
    private global: GlobalService
  ) {}

  
  ngOnInit(){
      
  }
  
  openDialog() {
    this.dialog.open(TermoComponent, {
      height: '500px',
      width: '500px',
    });
  }

  openForm(){
    this.global.routePagGrade('tela3');
  }

}


