/**
 * Created by Alienware on 2017/7/19.
 */
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserHomeComponent } from './user-home.component';
import { UserLoginComponent } from './user-login.component';

import {MdInputModule, MdButtonModule} from '@angular/material';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    UserHomeComponent,
    UserLoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    UserRoutingModule,
    AlertModule.forRoot(),
  ],
})
export class UserModule { }
