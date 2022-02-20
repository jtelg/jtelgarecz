import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponentModule } from './components/head/head.component.module';
import { InicioComponentModule } from './pages/inicio/inicio.components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicioComponentModule,
    HeadComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
