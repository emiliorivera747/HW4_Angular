
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {AuthService} from './auth.service';
import {PARecord} from '../_models/PARecord';




@Injectable({ providedIn: 'root' })
export class PArecordService {
  constructor(private http: HttpClient, private auth: AuthService) { }


  //TODO: write a function that will fetch 'PArecord[]' from the server. Hint: use HttpClient's 'get()'.





  //TODO: write a function that will (1) generate a random course and then (2) 'post' it on the server.  Hint: use HttpClient's 'get()'.



  //TODO: write a function that will 'delete' a parecord. Hint: the server knows the username of who the requester via the JWT header.



}
