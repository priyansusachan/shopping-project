import { Component, inject } from "@angular/core";
import { AuthService } from "./services/auth.service";

@Component({
    selector: "<app-header>",   
    templateUrl: "header.component.html",
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    private authService = inject(AuthService)
    isAdminLoggedIn = false

    ngOnInit(){
        //this.isAdminLoggedIn = this.authService.getIsLoggedIn()
        if(sessionStorage.getItem("user") != null){
            this.authService.setIsLoggedIn(true)
        }
        
        this.authService.currentLoggedIn.subscribe({
            next:(data) => this.isAdminLoggedIn = data
            
        })
    }

    constructor(){
        console.log("Header component created.")
    }
}