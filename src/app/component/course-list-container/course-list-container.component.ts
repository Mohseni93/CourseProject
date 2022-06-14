import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseService } from '../../services/coursesService/course.service';
import { Courses } from '../../models/coursesModel';

@Component({
  selector: 'app-course-list-container',
  templateUrl: './course-list-container.component.html',
  styleUrls: ['./course-list-container.component.scss']
})
export class CourseListContainerComponent implements OnInit {
  myCourseList: Courses[] = []
  sub = new Subscription();
  constructor(private coursesService: CourseService) {
    this.sub.add(this.coursesService.getCourse().subscribe((res: Courses[]) => {
      this.myCourseList = res
    }))
  }
  ngOnInit(): void {
  }
}