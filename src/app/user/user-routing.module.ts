/**
 * Created by Alienware on 2017/7/19.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserHomeComponent } from './user-home.component';
import { UserLoginComponent } from './user-login.component';

const userRoutes: Routes = [
  { path: 'user',  redirectTo: '/user/home', pathMatch: 'full' },
  { path: 'user/home', component: UserHomeComponent },
  { path: 'login', component: UserLoginComponent},
];
@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
