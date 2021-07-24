import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {

  //TODO: this component must show a list of registered users.

  constructor() { }

  ngOnInit() {
   }
}
