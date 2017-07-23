import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  templateUrl: './user-login.component.html',
})
export class UserLoginComponent {
  error_msg: string;
  username: string;
  password: string;

  constructor(
    private router: Router,
    private auth: AuthService,
  ) {}

  navToSignUp() {
    this.router.navigate(['/signup']);
  }

  onSubmit() {
    this.auth.login(this.username, this.password).then( () => {console.log('success'); this.router.navigate(['/home']); },
      error_msg => {console.log('fail'); this.error_msg = error_msg; console.log(error_msg); });
  }
}
