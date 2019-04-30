import { NgModule                 } from '@angular/core';
import { HomeComponent            } from './home.component';
import { CommonModule             } from '@angular/common';

//MODULES
import { MaterialModule           } from '../material.module';
import { FlexLayoutModule         } from '@angular/flex-layout';
import { SharedModule             } from './shared/shared.module';

//TELAS
import { Tela1Component           } from './tela-1/tela-1.component'
import { TermoComponent           } from './tela-1/tela-1.component'
import { Tela3Component           } from './tela-3/tela-3.component';
import { Tela4Component           } from './tela-4/tela-4.component';

@NgModule({
  imports:      [ CommonModule, MaterialModule, FlexLayoutModule, SharedModule ],
  declarations: [ HomeComponent, Tela1Component, Tela3Component, Tela4Component, TermoComponent ],
  entryComponents : [ Tela1Component, Tela3Component, Tela4Component, TermoComponent ],
  exports: [ HomeComponent, SharedModule ]
})
export class HomeModule { }
