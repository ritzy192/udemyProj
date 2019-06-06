import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacebookLike } from './facebookLike';


 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
 var initialLikes = 1;
 new FacebookLike(initialLikes,true).printCount();
 new FacebookLike(initialLikes, false).printCount();
