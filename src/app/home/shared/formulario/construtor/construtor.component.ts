import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-construtor',
  template: `
    <div class="form-table"  [formGroup]="form">
        <p *ngIf="field.pergunta" style="font-weight: bold; font-size: 16">{{field.pergunta}}</p>
        <div [ngSwitch]="field.type" style="padding: 20px;">
            <app-radio *ngSwitchCase="'radio'" [field]="field" [form]="form"></app-radio>
            <app-checkbox *ngSwitchCase="'checkbox'" [field]="field" [form]="form"></app-checkbox>
            <app-dropdown *ngSwitchCase="'dropdown'" [field]="field" [form]="form"></app-dropdown>
        </div>
    </div>
  `
})
export class ConstrutorComponent implements OnInit {

    @Input() field:any;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    
    @Input() form:any;
    
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }

    constructor() { }

    ngOnInit() {

    }
}