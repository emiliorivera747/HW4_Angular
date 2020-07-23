import {Component, OnDestroy, OnInit} from '@angular/core';
import { first } from 'rxjs/operators';


import {NotificationService} from '../_services/notification.service';
import {PARecord} from '../_models/PARecord';
import {PArecordService} from '../_services/parecord.service';


@Component({ templateUrl: 'home.component.html' ,

  styleUrls: ['home.component.css']})
export class HomeComponent implements OnInit {



  parecords: PARecord[] = [];


  constructor(
    private parecordservice: PArecordService,
    private notifService: NotificationService,
  ) {}

  ngOnInit() {
    this.loadAllPArecords();
      }





  private loadAllPArecords() {

    // TODO: this function should get all parecords from the server and display them. Use notification service to display messages for 'success' & 'error'.

  }

  createPARecord() {

    // TODO: send PArecord to server and display notification to inform the user about what happened.

  }

  deletePARecord(date) {


    // TODO: this function should delete a given parecord from the server. User must see the deletion immediately (the record should dissapear from the UI)

  }

}

