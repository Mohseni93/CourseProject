import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseListContainerComponent } from './course-list-container/course-list-container.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    CoursesComponent,
    CourseListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
