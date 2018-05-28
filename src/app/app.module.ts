import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './modules/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';

import { NgxJsonViewerModule } from 'ngx-json-viewer';

/* config values */
import { APP_CONFIG, AppConfig } from './config/app.config';


@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    AppRoutingModule,
    HttpModule,
    NgxJsonViewerModule,
    FormsModule
  ],
  providers: [DataService, ,
    { provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
