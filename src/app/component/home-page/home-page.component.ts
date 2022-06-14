import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  courses =[
    {
    id:1,
    title: "Data Science and Machine Learning with Python - Hands On!",
    image: "./assets/image/courses-01.png",
    time: "08 hr 15 min",
    lecture: "29 Lecture",
    newPrice : "$385.00",
    oldPrice : "$440.00",
    rating : 38 ,
    selected: false
  }
,
{
  id:2,
  title: "Create Amazing Color Schemes for Your UX Design Projects",
  image: "./assets/image/courses-02.png",
  time: "03 hr 15 min",
  lecture: "24 Lecture",
  newPrice : "$420.00",
  selected: false
}
,
{
  id:3,
  title: "Culture & Leadership: Strategies for a Successful Business",
  image: "./assets/image/courses-03.png",
  time: "02 hr 40 min",
  lecture: "35 Lecture",
  newPrice : "$295.00",
  oldPrice : "$340.00",
  rating : 100 ,
  selected: false
}
,
{
  id:4,
  title: "Finance Series: Learn to Budget and Calculate your Net Worth.",
  image: "./assets/image/courses-04.png",
  time: "02 hr 40 min",
  lecture: "35 Lecture",
  newPrice : "Free",
  rating : 20 ,
  selected: false
}
,
{
  id:5,
  title: "Build Brand Into Marketing: Tackling the New Marketing Landscape",
  image: "./assets/image/courses-05.png",
  time: "02 hr 40 min",
  lecture: "35 Lecture",
  newPrice : "$136.00",
  rating : 0 ,
  selected: false
}
,
{
  id:6,
  title: "Graphic Design: Illustrating Badges and Icons with Geometric Shapes",
  image: "./assets/image/courses-06.png",
  time: "02 hr 40 min",
  lecture: "35 Lecture",
  newPrice : "$237.00",
  rating : 80,
  selected: false
}];
  constructor() { }

  ngOnInit(): void {
  }

}
