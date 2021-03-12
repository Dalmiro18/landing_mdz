import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms'
import {HttpClientModule } from '@angular/common/http';
import { StrictNumberOnlyDirective } from './strict-number-only.directive'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    StrictNumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
