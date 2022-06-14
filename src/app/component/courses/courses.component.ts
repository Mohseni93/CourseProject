import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from 'src/app/models/coursesModel';
import { CourseService } from 'src/app/services/coursesService/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  @Input() courseListInput: Courses[] = []
  constructor(private courseService:CourseService,private rout:Router) { }
  ngOnInit(): void {
  }
  addCourse(item: Courses) {
    item.selected = true;
    let added = this.courseService.addToList(item)
    if (added === true) {
      console.info('add successful')
    } else {
      console.warn('this item already is exist')
    }
  }
}
