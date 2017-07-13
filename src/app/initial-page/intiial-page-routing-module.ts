import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {InitialPageComponent} from "./initial-page.component";
@NgModule ({
  imports: [
    RouterModule.forChild([
      { path: 'maintenance', component: InitialPageComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class InitialPageRoutingModule{

}
