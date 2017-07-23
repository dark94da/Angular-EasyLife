/**
 * Created by Alienware on 2017/7/18.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service';

@Component({
  selector: 'nav-top',
  templateUrl: './nav-top.component.html'
})
export class NavTopComponent {
  private username: string;
  private isLoggedIn: boolean;

  constructor (private auth: AuthService, private router: Router) { this.isLoggedIn = false; }

  private loggingInfo= this.auth.logginInfo.subscribe((t) => { this.isLoggedIn = t; if (t) {this.username = this.auth.getUserName(); }});

  logout() {
    this.auth.logout().then(() => this.router.navigate(['/home']));
  }
}
