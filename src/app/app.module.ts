import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { SearchModule } from './search/search.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavTopComponent } from './nav-top/nav-top.component';

import { AuthService } from './core/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavTopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    SearchModule,
    PostModule,
    UserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
  ],
  exports: [
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
