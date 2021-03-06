import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { CardComponent } from './card.component';
import { Course } from './Course';
import { CapitalizePipe } from './capitalize.pipe';
import { SearchCoursesPipe } from './searchcourses.pipe';

@NgModule({
  declarations: [
    AppComponent, BadgeComponent , CardComponent , CapitalizePipe , SearchCoursesPipe
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
