import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walk',
  templateUrl: './walk.component.html',
  styleUrls: ['./walk.component.css']
})
export class WalkComponent implements OnInit {


  mode = 'determinate';

  bufferValue = 0;

  activities = ['directions_walk', 'directions_run', 'directions_bike'];
  //
  colors = ['primary', 'accent', 'warn', 'warning', 'surface'];
  color = this.colors[Math.floor(Math.random() * Math.floor(this.colors.length))];
  //
  // dates = ['March 15 3:00pm', 'September 18 2:16am', 'January 4 7:25am', 'July 5 12:04 pm'];
  //

  activity = this.activities[0];
  calprogressvalue = 0;
  minprogressvalue = 0;
  // calorie = Math.floor(Math.random() * 2500);
  // minute =  Math.floor(Math.random() * 180);
  //

  // minutegoal = Math.floor(this.minute / 1.8);
  //
   date = new Date();


  //



  // calories: number;
  // minutes: number;
  // caloriegoal: number;
  // minutegoal: number;
  // steps: number;
  // activityType: PAType;
  // createdDate: Date;




  constructor() { }




  ngOnInit() {

    this.calprogressvalue = Math.floor(54);
    this.minprogressvalue = Math.floor(35);
  }

}
