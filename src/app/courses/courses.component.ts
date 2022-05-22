import { Component, Input, OnInit } from '@angular/core';
import { Courses } from '../coursesModel';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input() courseListInput : any
 courses=[{
   title : "Culture & Leadership: Strategies for a Successful Business",
   image : "./assets/image/courses-01.png",
   time  : "08 hr 15 min",
   lecture: "29 Lecture"
 }];
  constructor() { }

  ngOnInit(): void {
  }

}
