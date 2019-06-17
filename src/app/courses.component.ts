import { Component } from '@angular/core'
import { CoursesService } from './courses.service';
import { clearResolutionOfComponentResourcesQueue } from '@angular/core/src/metadata/resource_loading';

@Component({
    selector: 'courses',
    template: `<h2>{{title | lowercase | uppercase}}</h2>
                <ul>
                    <li *ngFor='let course of courses'>
                    {{course | uppercase}}
                    </li>
                </ul>
                <input [value]="email" (keyup.enter) = "email = $event.target.value; writeEmail()" />
                <br><br><input [(ngModel)]="email" (keyup.enter) = "writeEmail()"/><br><br>
                <input [value]="ema" (keyup.enter) = "writeEmailoneway()" /><br><br>
                <p>{{newpara | summary:67}}</p>
                `
})
//implemented in 2 ways
export class CoursesComponent {
    
    title = 'list of courses' //implemented pipe uppercase
    email="this@twoway.com"
    ema="this@oneway.com"
    courses;
    //custom pipe
    newpara="AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. (This flexibility has led to the acronym MVW, which stands for model-view-whatever and may also encompass model–view–presenter and model–view–adapter.) In 2014, the original AngularJS team began working on the Angular web framework.The AngularJS framework works by first reading the Hypertext Markup Language (HTML) page, which has additional custom HTML attributes embedded into it. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources. According to JavaScript analytics service Libscore, AngularJS is used on the websites of Wolfram Alpha, NBC, Walgreens, Intel, Sprint, ABC News, and about 12,000 other sites out of 1 million tested in October 2016.[3] AngularJS is currently in the top 100 of the most starred projects on GitHub.[4]AngularJS is the frontend part of the MEAN stack, consisting of MongoDB database, Express.js web application server framework, Angular.js itself, and Node.js server runtime environment."


    constructor(service: CoursesService){
        this.courses=service.getCourses();
    }
    //shows 2 way binding
    writeEmail(){
        console.log(this.email)
    }
    //shows 1 way binding
    writeEmailoneway(){
        console.log(this.ema)
    }
}