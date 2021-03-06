import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InitialPageModule} from "./initial-page/initial-page.module";
import {AppRoutingModule} from "./app-routing-module";
import {HttpClient} from "./http-api.service";
import {GitHubApi} from "./githupapi.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InitialPageModule,
    AppRoutingModule
  ],
  providers: [HttpClient, GitHubApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
