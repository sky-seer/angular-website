import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Module Route
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Module
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

// Service
import { HttpErrorHandler } from './http-error-handler.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [
    HttpErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
