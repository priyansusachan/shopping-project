import { NgModule } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatListModule} from "@angular/material/list"
import {MatDividerModule} from "@angular/material/divider"
import {MatCardModule} from "@angular/material/card"
import {MatInputModule} from "@angular/material/input"
import {MatButtonModule} from "@angular/material/button"
import {MatSelectModule} from "@angular/material/select"

@NgModule({
  exports: [MatToolbarModule, MatSidenavModule, MatListModule, MatDividerModule, MatCardModule,
     MatInputModule, MatButtonModule, MatSelectModule]
})
export class AppMaterialModule { }
