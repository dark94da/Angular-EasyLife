/**
 * Created by Alienware on 2017/7/18.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostCarpoolComponent } from './post-carpool.component';

const postRoutes: Routes = [
  { path: 'post',  redirectTo: '/post/carpool', pathMatch: 'full' },
  { path: 'post/carpool', component: PostCarpoolComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(postRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostRoutingModule { }
