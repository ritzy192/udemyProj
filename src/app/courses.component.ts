import { Component } from '@angular/core'
import { CoursesService } from './courses.service';
import { clearResolutionOfComponentResourcesQueue } from '@angular/core/src/metadata/resource_loading';

@Component({
    selector: 'courses',
    template: `<h2>{{title}}</h2>
                <ul>
                    <li *ngFor='let course of courses'>
                    {{course}}
                    </li>
                </ul>
                <input [value]="email" (keyup.enter) = "email = $event.target.value; writeEmail()" />
                `
})
export class CoursesComponent {
    title = 'list of courses' ;
    email="this@that.com"
    courses;
    constructor(service: CoursesService){
        this.courses=service.getCourses();
    }
    writeEmail(){
        console.log(this.email)
    }
}