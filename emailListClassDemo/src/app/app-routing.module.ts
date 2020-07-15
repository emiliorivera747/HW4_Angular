import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmailsComponent} from './emails/emails.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';



const routes: Routes = [{
   path: '',
   component: EmailsComponent
 },{
  path: 'admin',
  component: AdminComponent
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
