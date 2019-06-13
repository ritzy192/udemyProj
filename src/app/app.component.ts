import { Component } from '@angular/core';
import { FavouriteEventArgs } from './star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "EcomWeb";
  post = {
    // debugger
    isFavourite: false,
  }
  logSelectedState(args: FavouriteEventArgs){
    console.log("is selected: ", args);
  }
}
