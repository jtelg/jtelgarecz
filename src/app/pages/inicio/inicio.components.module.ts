import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InicioComponent } from './inicio.component';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [InicioComponent]
})
export class InicioComponentModule { }
