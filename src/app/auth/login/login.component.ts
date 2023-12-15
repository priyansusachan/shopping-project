import { Component, inject } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../auth.styles.css'
})
export class LoginComponent {
  loginForm:FormGroup
  private toaster = inject(ToastrService)
  private router = inject(Router)
  private authService = inject(AuthService)
  constructor(){
    this.loginForm = new FormGroup({
      uname: new FormControl("", Validators.required),
      upwd: new FormControl("", Validators.required)
    })
  }

  doLogin(){
    //console.log("Login form is valid?", this.loginForm.valid);
    if(this.loginForm.invalid){
      this.toaster.error("No Data entered in user name and passowrd")
    }
    else{
      //console.log(this.loginForm.value);
      let userName = this.loginForm.value.uname
      let passowrd = this.loginForm.value.upwd

      if(userName == "admin" && passowrd == "admin"){
        this.toaster.success("Login Success")
        this.authService.setIsLoggedIn(true)
        sessionStorage.setItem("user", userName)
        this.router.navigate(['admin/dashboard'])
      }
      else{
        this.toaster.error("Invalid Credentials")

      }
      
    }
  }
}
