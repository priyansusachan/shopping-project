import { Component, inject} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  template: `
    <p>
      logout works!
    </p>
  `,
  styles: ``
})
export class LogoutComponent {
private authService = inject(AuthService)

ngOnInit(){
  sessionStorage.clear()
  this.authService.setIsLoggedIn(false)
}
}
