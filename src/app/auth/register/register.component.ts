import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: '../auth.styles.css'
})
export class RegisterComponent {

 formUser: User = new User(0, '', '', '')

 private toaster = inject(ToastrService)

 doRegister(valid:any){
  if(valid){
    console.log(this.formUser);
    
  }
  else{
    this.toaster.error("Invalid data entered")
  }
 }
}
