import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false

  currentLoggedIn = new BehaviorSubject(this.isLoggedIn)


  getIsLoggedIn() {
    return this.isLoggedIn
   }

   setIsLoggedIn(val: boolean) {
     this.isLoggedIn = val
     //Notify success value to all subscribers
     this.currentLoggedIn.next(this.isLoggedIn)
     console.log('Auth service is logged in uddated', this.isLoggedIn);
     
   }
}
