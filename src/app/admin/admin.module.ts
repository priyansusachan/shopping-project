import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [DashboardComponent],
    imports: [RouterModule.forChild([
        {path: "dashboard", component: DashboardComponent}
    ])]
})
export class AdminModule{
    constructor(){
        console.log("Admin module Created.");
    }
}