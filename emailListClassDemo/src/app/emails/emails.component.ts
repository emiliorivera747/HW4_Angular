import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {


  emails = [{id: 1, email: 'test@test.com'}, {id: 2, email: 'test' +
      '2@test.com'}];

  constructor() { }

  delete(id): void {
    this.emails = this.emails.filter(item => item.id !== id);
  }

  add(e) {
    this.emails.push({id: Date.now(), email: e});
  }

  ngOnInit(): void {
    console.log("On init happened");

  }

}
