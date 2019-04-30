import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  template: `
    <div class="form-table" [formGroup]="form">
       <div [formGroupName]="field.name">
            <mat-checkbox *ngFor="let opt of field.options" [formControlName]="opt.key" style="margin: 10px">{{opt.label}}</mat-checkbox>
        </div>
    </div> `
})

export class CheckBoxComponent  {

  @Input() field:any = {};
  @Input() form:FormGroup;

  labelPosition = 'after';
}
