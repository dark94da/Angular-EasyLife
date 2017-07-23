/**
 * Created by Alienware on 2017/7/18.
 */
import { NgModule }             from '@angular/core';
import {SearchRoutingModule } from './search-routing.module';

import { SearchHomeComponent } from './search-home.component';

@NgModule({
  declarations: [
    SearchHomeComponent,
  ],
  imports: [
    SearchRoutingModule,
  ],
})
export class SearchModule { }
