import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListContainerComponent } from './component/course-list-container/course-list-container.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { RegisterFormComponent } from './component/register-form/register-form.component';

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
