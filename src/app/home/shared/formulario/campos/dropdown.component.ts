import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  template: `
    <div class="form-table" fxLayout="column" [formGroup]="form" style="margin-top: -30px;">
        <h5>{{field.label}}</h5>
        <mat-form-field style="margin-top: -20px; width: 50%">
            <mat-label>Selecione uma Opção</mat-label>
            <mat-select formControlName="{{field.name}}">
                <mat-option *ngFor="let opt of field.options" [value]="opt.key">
                    {{opt.label}}
                </mat-option>
            </mat-select>
        </mat-form-field>
    </div>
    `
})

export class DropdownComponent  {

  @Input() field:any = {};
  @Input() form:FormGroup;

  ngOninit() {
   
  }
}
