import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RouterModule, Routes } from "@angular/router";
import { LogoutComponent } from "./logout.component";
import { AppMaterialModule } from "../app-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const authRoutes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "logout", component:LogoutComponent}
]

@NgModule({
    declarations: [LoginComponent, RegisterComponent, LogoutComponent], 
    imports: [ AppMaterialModule, RouterModule.forChild(authRoutes), ReactiveFormsModule, FormsModule]
})
export class AuthModule{
    constructor(){
        console.log("Auth Module Created.")
    }
}