import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListContainerComponent } from './course-list-container/course-list-container.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'register', component : RegisterFormComponent},
  {path : 'myCourse' , component : CourseListContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
