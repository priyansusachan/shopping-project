import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class AuthGaurd{
    private router = inject(Router)

    canActivate(){
        if(sessionStorage.getItem("user") != null){
            return true
        }
        else{
            this.router.navigate(['/auth/login'])
            return false
        }
    }
}