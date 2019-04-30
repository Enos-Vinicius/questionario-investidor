//ANGULAR
import { NgModule                 } from '@angular/core';
import { BrowserModule            } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { FormsModule              } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';

//COMPONENTES
import { MaterialModule           } from './material.module';
import { FlexLayoutModule         } from '@angular/flex-layout';


//APLICAÇÃO
import { HomeModule               } from './home/home.module';
import { AppComponent             } from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    HomeModule, 
    HttpClientModule,
    MaterialModule, 
    FlexLayoutModule 
  ],
  providers:    [ HttpClientModule ],
  declarations: [ AppComponent ],
  exports:      [ MaterialModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
