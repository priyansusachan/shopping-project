import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RouterModule, Routes } from "@angular/router";
import { LogoutComponent } from "./logout.component";

const authRoutes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "logout", component:LogoutComponent}
]

@NgModule({
    declarations: [LoginComponent, RegisterComponent], 
    imports: [RouterModule.forChild(authRoutes)]
})
export class AuthModule{
    constructor(){
        console.log("Auth Module Created.")
    }
}