import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/services/coursesService/course.service';
import { Router } from '@angular/router';
import { Courses } from 'src/app/models/coursesModel';
import { RegisterService } from 'src/app/services/registerServices/RegisterService';
import { UserService } from 'src/app/services/UserService/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  courseList: Courses[] = [];
  sub = new Subscription();
  constructor(
    private registerService: RegisterService,
    private courseService: CourseService,
    private rout: Router,
    private userValue: UserService,
  ) { }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    var header = document.querySelector(".header-top") as HTMLDivElement;
    if (document.body.scrollTop < 100) {
      header.classList.add('scroll-fix');
    }
    else {
      header.classList.remove('scroll-fix');
    }
  }
  submitted: boolean = false;
  userName: string = "";
  ngOnInit(): void {
    this.sub.add(this.registerService.allFormData.subscribe(res => {
      this.submitted = res;
    }))
    this.sub.add(this.userValue.usrValue.subscribe(res => {
      this.userName = res;
    }))
  }
  logOut() {
    this.submitted = false
    alert("You are logged out of your account")
  }
  navigate() {
    this.rout.navigateByUrl('/myCourse')
  }
  menuToggle(){
    var menu = document.querySelector(".main-menu");
    var overlay = document.querySelector(".overlay");
    if(menu != null){
      menu.classList.toggle("show-up")
    }
    if(overlay != null){
      overlay.classList.toggle("show-up")
    }
  }
}

