import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { AppMaterialModule } from "../app-material.module";
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

@NgModule({
    declarations: [DashboardComponent, ManageUsersComponent, ManageProductsComponent],
    imports: [AppMaterialModule, RouterModule.forChild([
        {path: "dashboard", component: DashboardComponent, children:[
            {path:"users", component:ManageUsersComponent}, 
            {path: "products", component: ManageProductsComponent}
        ]}
    ])]
})
export class AdminModule{
    constructor(){
        console.log("Admin module Created.");
    }
}