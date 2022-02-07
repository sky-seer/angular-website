import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HumiditeComponent } from './humidite/humidite.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AcceuilService } from './acceuil/acceuil.service';
import { TestuiComponent } from './testui/testui.component';
//import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    HumiditeComponent,
    TemperatureComponent,
    AcceuilComponent,
    TestuiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
//    HttpClient,
    HttpClientModule
  ],
  providers: [
    AcceuilService,
    HttpErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
