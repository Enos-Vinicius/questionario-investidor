//ANGULAR
import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';

//COMPONENTES
import { FormularioComponent      } from './formulario.component';


@NgModule({
  imports:      [ 
      CommonModule
  ],
  declarations: [ 
      FormularioComponent
  ],
  exports: [ FormularioComponent ]
})
export class SharedModule { }