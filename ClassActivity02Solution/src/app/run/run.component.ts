import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {

  mode = 'determinate';

  bufferValue = 0;


  //
  colors = ['primary', 'accent', 'warn', 'warning', 'surface'];
  color = this.colors[Math.floor(Math.random() * Math.floor(this.colors.length))];
  //
  // dates = ['March 15 3:00pm', 'September 18 2:16am', 'January 4 7:25am', 'July 5 12:04 pm'];
  //


  calprogressvalue = 0;
  minprogressvalue = 0;
  // calorie = Math.floor(Math.random() * 2500);
  // minute =  Math.floor(Math.random() * 180);
  //

  // minutegoal = Math.floor(this.minute / 1.8);
  //
  date = new Date();


  //




  constructor() { }




  ngOnInit() {

    this.calprogressvalue = Math.floor(54);
    this.minprogressvalue = Math.floor(35);
  }

}
