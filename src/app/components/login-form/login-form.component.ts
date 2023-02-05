import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
// login form is currently embedded in the login page which means the login page will retrieve the eventEmitters event notification
export class LoginFormComponent {
  // emit event to the parent component that is hosting login form
  @Output() login: EventEmitter<void> = new EventEmitter();

  //DI.
  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService
    ) {}

    public loginSubmit(loginForm: NgForm): void {

    // username
    const {username} = loginForm.value;

    this.loginService.login(username)
    .subscribe({
      next: (user: User) => {
          this.userService.user = user
          this.login.emit();
      },
      error: () => {

      }
    })
  }
}
