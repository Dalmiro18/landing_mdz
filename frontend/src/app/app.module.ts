import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms'
import {HttpClientModule } from '@angular/common/http';
import { StrictNumberOnlyDirective } from './strict-number-only.directive';
import { AdminComponent } from './components/admin/admin.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    StrictNumberOnlyDirective,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularEditorModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
