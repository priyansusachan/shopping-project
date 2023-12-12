//1. Refer NgModule member from core library
import { NgModule } from "@angular/core";
// import { AuthModule } from "./auth/auth.mdule";
// import { AdminModule } from "./admin/admin.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent, NotFoundComponent } from "./menulinks.component";
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from "./app-material.module";

//Difine Route Mapping
const appRoutes: Routes = [
    //Associate path and its respective component
    {path: "home", component: HomeComponent},
    //Redirect
    {path: "", redirectTo: "home", pathMatch:"full"},
    //Lazy Loading
    {path: "auth", loadChildren: () => import("./auth/auth.module").then(m=> m.AuthModule)},
    {path: "admin", loadChildren: () => import("./admin/admin.module").then(m=> m.AdminModule)},
    //For any unmatched paths
    {path: "**", component: NotFoundComponent}
]

//2. Use NgModule Decorator
@NgModule({
    //Module Dependencies
    imports: [ShoppingModule, BrowserModule, AppMaterialModule,
        //configuring the routes
        RouterModule.forRoot(appRoutes), BrowserAnimationsModule],
    //Register Component classes
    declarations: [AppComponent, HeaderComponent, HomeComponent, NotFoundComponent],
    //startup component
    bootstrap: [AppComponent]
})
//3. Define a class
export class AppModule{
    constructor(){
        console.log("App Module Created!")
    }
}