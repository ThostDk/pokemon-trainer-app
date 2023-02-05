import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(
    private loginService: LoginService,
    
    ) {}
    logoutUserClick = () =>{
      this.loginService.logout();
    }
}
