import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  template: `
    <div class="form-table" [formGroup]="form" style="margin-top: -30px">
        <mat-radio-group formControlName="{{field.name}}" >
          <div fxLayoutAlign="space-around center">
          <mat-radio-button style="padding: 10px;" *ngFor="let opt of field.options" value="{{opt.key}}" >{{opt.label}}</mat-radio-button>
          </div>
        </mat-radio-group>
    </div>
    `
})

export class RadioComponent  {

  @Input() field:any = {};
  @Input() form:FormGroup;

  ngOninit() {
   
  }
}
