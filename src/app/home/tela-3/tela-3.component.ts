import { Component, OnInit            } from '@angular/core';
import { GlobalService                } from '../shared/service/global.service'

@Component({
    selector: 'app-tela-3',
    templateUrl: './tela-3.component.html',
    styleUrls: [ './tela-3.component.css' ]
  })
  export class Tela3Component implements OnInit  {
    
    campos: any[] = [];

    //https://api.myjson.com/bins/d5yeg
    constructor(
      private global: GlobalService
    ) {}
    
    ngOnInit(){
      this.global.buscarForm()
      .subscribe(
        data => {
          this.campos = data.data;
        },
        err => {
          console.log("ERROr: ", err);
        })
    }

    submitForm(event){
      this.global.dadosForm = event.value;
      this.global.routePagGrade('tela4');
    }
  }
  