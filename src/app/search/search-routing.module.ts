/**
 * Created by Alienware on 2017/7/18.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchHomeComponent } from './search-home.component';

const searchRoutes: Routes = [
  { path: 'search',  redirectTo: '/search/home', pathMatch: 'full' },
  { path: 'search/home', component: SearchHomeComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule { }
