import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {WalkComponent} from './walk/walk.component';
import {RunComponent} from './run/run.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
  {
    path: 'walk',
    component: WalkComponent
  },
  {
    path: 'run',
    component: RunComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
