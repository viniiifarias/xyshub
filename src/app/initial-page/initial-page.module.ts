import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InitialPageRoutingModule} from "./intiial-page-routing-module";
import {InitialPageComponent} from "./initial-page.component";
import {InitialPageService} from "./initial-page.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    InitialPageRoutingModule,
    HttpModule
  ],
  declarations: [
    InitialPageComponent,
  ],
  exports:[
    InitialPageComponent
  ],
  providers:[
    InitialPageService
  ]
})
export class InitialPageModule { }
