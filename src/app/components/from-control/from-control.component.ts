import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-control',
  templateUrl: './from-control.component.html',
  styleUrls: ['./from-control.component.css']
})
export class FromControlComponent{

  contactMethods=[
    {id: 1, name: 'email'},
    {id: 2, name: 'phone'}
  ]
public log(x){
  console.log(x);
}
public submit(y){
  console.log(y);
}
}
