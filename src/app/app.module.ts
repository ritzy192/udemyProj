import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { StarComponent } from './star.component';
import { InputFormatDirective } from './input-format.directive';
import { FromControlComponent } from './components/from-control/from-control.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { CoursesCoveredComponent } from './components/courses-covered/courses-covered.component';
import { PostComponent } from './components/post/post.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


 
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    StarComponent,
    InputFormatDirective,
    FromControlComponent,
    SignupFormComponent,
    CoursesCoveredComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 
    CoursesService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
