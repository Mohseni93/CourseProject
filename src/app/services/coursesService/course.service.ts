import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Courses } from '../../models/coursesModel';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Courses[] = [];
  constructor() { }
  
  addToList(course: Courses): boolean {
    let i = this.courses.findIndex(e => e.id === course.id)
    if (i == -1 || typeof i === 'undefined') {
      this.courses.push(course)
      return true
    } else {
      return false
    }
  }
  getCourse(): Observable<Courses[]> {
    const course = of(this.courses);
    return course;
  }
}
