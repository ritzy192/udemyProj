import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { FormsModule} from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { StarComponent } from './star.component';
import { InputFormatDirective } from './input-format.directive';
import { FromControlComponent } from './components/from-control/from-control.component';


 
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    StarComponent,
    InputFormatDirective,
    FromControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
}