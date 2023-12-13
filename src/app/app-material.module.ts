import { NgModule } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatListModule} from "@angular/material/list"
import {MatDividerModule} from "@angular/material/divider"
@NgModule({
  exports: [MatToolbarModule, MatSidenavModule, MatListModule, MatDividerModule]
})
export class AppMaterialModule { }
