import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../shared/service/global.service';
import { createTemplateData } from '@angular/core/src/view/refs';

@Component({
  selector: 'app-tela-4',
  templateUrl: './tela-4.component.html',
  styleUrls: ['./tela-4.component.css']
})
export class Tela4Component implements OnInit {
  
  arrDadosForm = [];

  constructor(
    private global: GlobalService
  ) {}

  ngOnInit(){
    this.buscarDadosForm();
  
  }

  buscarDadosForm(){
    this.global.buscarForm()
      .subscribe(
      data => {
        this.criarObjForm(data.data);
      },
      err => {
        console.log("ERROr: ", err);
      })
  }

  criarObjForm(data){
    for(let k of data){
      for(let j of k.options){
        if(this.global.dadosForm[k.name] == j.key){
          this.arrDadosForm.push({
            pergunta: k.pergunta?k.pergunta:k.label,
            resposta: j.label
          })
        }
      }
    }
  }

  voltarHome(){
    this.global.routePagGrade('tela1');
  }

}
