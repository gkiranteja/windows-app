import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { routerComponent } from './app-routing.module';
import {RouterModule,Router} from '@angular/router';
import {ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from './crud.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule, RouterModule, HttpClientModule
  ],
  providers: [ CrudService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
