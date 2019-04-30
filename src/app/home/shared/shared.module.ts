//ANGULAR
import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { FormsModule              } from '@angular/forms';
import { ReactiveFormsModule      } from '@angular/forms';

//COMPONENTES
import { FormularioComponent      } from './formulario/formulario.component';
import { ConstrutorComponent      } from './formulario/construtor/construtor.component';
import { RadioComponent           } from './formulario/campos/radio.component';
import { MaterialModule           } from '../../material.module';
import { CheckBoxComponent        } from './formulario/campos/checkbox.component';
import { DropdownComponent        } from './formulario/campos/dropdown.component';

@NgModule({
  imports:      [ 
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [ 
    FormularioComponent,
    RadioComponent,
    CheckBoxComponent,
    DropdownComponent,
    ConstrutorComponent
  ],
  exports:      [ FormularioComponent ]
})
export class SharedModule { }
