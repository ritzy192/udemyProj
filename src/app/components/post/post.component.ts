import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
import { SWITCH_COMPILE_COMPONENT__POST_R3__ } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  posts: any[];
  private url= "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) {
    this.http.get(this.url)
    .subscribe((response: any[]) => {
      this.posts = response;
      // console.log(this.posts)
    });
   }
  
  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value=" ";
    this.http.post(this.url,post)
    .subscribe((response:any)=>{
    post['id'] = response.id;
    this.posts.splice(0, 0, post);
    })
  }

  updatePost(post){
    this.http.patch(this.url+'/'+post.id,{isRed: true})
    .subscribe(response=>{
      // console.log(response)
    })
  }

  deletePost(post){
    this.http.delete(this.url+'/'+post.id)
    .subscribe(response=>{
      let index = this.posts.indexOf(post)
      this.posts.splice(index,1);
    })
  }
}
