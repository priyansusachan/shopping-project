import { Component, inject } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../auth.styles.css'
})
export class LoginComponent {
  loginForm:FormGroup
  private toaster = inject(ToastrService)

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
    }else{
      console.log(this.loginForm.value);
      
    }
  }
}
