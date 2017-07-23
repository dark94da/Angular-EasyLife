/**
 * Created by Alienware on 2017/7/18.
 */
import { NgModule }             from '@angular/core';
import {PostRoutingModule } from './post-routing.module';

import { PostCarpoolComponent } from './post-carpool.component';

@NgModule({
  declarations: [
    PostCarpoolComponent,
  ],
  imports: [
    PostRoutingModule,
  ],
})
export class PostModule { }
