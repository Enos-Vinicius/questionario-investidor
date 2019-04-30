import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  template: `
  <div class="p-24" style="margin: 10px; text-align: center;">
    <form [formGroup]="form" (ngSubmit)="onSubmit.emit(this.form)" fxLayout="row" >
        <div  *ngFor="let field of fields">
            <app-construtor [field]="field" [form]="form"></app-construtor>
        </div>
        <button style="margin: 10px;" type="submit" [disabled]="!form.valid" mat-stroked-button color="primary">{{txtBtn}}</button>
    </form>
  </div>
  `
})
export class FormularioComponent implements OnInit {

    @Input() fields: any[] = [];
    @Input() txtBtn: string = 'Salvar';
    @Output() onSubmit = new EventEmitter();

    form: FormGroup;

    constructor() { 

    }
  
    ngOnInit() {
      let fieldsCtrls = {};
      for (let f of this.fields) {
        if (f.type != 'checkbox') {
          fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required)
        } else if(f.type != 'dropdown'){
          let opts = {};
          for (let opt of f.options) {
            
            if(f.required){
              opts[opt.key] = new FormControl(opt.value, Validators.required);
            } else {
              opts[opt.key] = new FormControl(opt.value);
            }
          }
          fieldsCtrls[f.name] = new FormGroup(opts)
        } else {
          //dropdown
          let opt = {};

          
        }
      }
      this.form = new FormGroup(fieldsCtrls);
      console.log(this.form);
      
    }

}
