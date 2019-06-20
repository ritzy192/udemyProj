import { Component } from '@angular/core';
import { FavouriteEventArgs } from './star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "EcomWeb";
  Info: any;
  post = {
    // debugger
    isFavourite: false,
  }
  logSelectedState(args: FavouriteEventArgs){
    console.log("is selected: ", args);
  }
  Items= ['mang0,graoes,orange'];
  Courses= [2,4,6,7,8,10,1];
   
  loadNames(){
  this.Info = [
    {id: 1, name: 'Aman'},
    {id: 2, name: 'Rohit'},
    {id: 3, name: 'Aakash'},
    {id: 4, name: 'Raman'},
    {id: 5, name: 'sunny'},
    {id: 6, name: 'nikhil'}
  ];
 }
  addCourse(){
    this.Info.push({id:3,name:'Karan'})
  }
  removeCourse(item){
  let index = this.Info.indexOf(item);
  this.Info.splice(index,1)
  }
  trackNames(index,item){
    return item ? item.id : undefined;
  }
}
