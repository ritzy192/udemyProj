import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FromControlComponent } from '../from-control/from-control.component';

@Component({
  selector: 'app-courses-covered',
  templateUrl: './courses-covered.component.html',
  styleUrls: ['./courses-covered.component.css']
})
export class CoursesCoveredComponent {

 form = new FormGroup({
   topics: new FormArray([])
 });

//another way create form :: FormBuilder
//  constructor(fb: FormBuilder){
//    this.form = fb.group({
//      name: ['',Validators.required],
//      contact: fb.group({
//        email: [],
//        phone: []
//      }),
//      topics: fb.array([])
//    });
//  }

 addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value=''
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

}
