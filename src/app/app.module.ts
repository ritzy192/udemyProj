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
 var initialLikes = 100;
 let likeIt = new FacebookLike(initialLikes,false);
 let dislikeIt = new FacebookLike(initialLikes,true);

 likeIt.calculateCount();
 dislikeIt.calculateCount();
 console.log(`like count : ${likeIt.count}, isselected : ${likeIt.state}`);
 console.log(`like count : ${dislikeIt.count}, isselected : ${dislikeIt.state}`);
