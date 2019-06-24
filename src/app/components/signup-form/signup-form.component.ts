import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { validateConfig } from '@angular/router/src/config';
import { SpaceValidators } from 'src/app/common/validators/space.validator';

@Component({
  selector: 'signup-from',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    password: new FormControl('rwererew',[Validators.required]),
    userName: new FormControl('fwe',[
      Validators.required, 
      Validators.minLength(3),
      SpaceValidators.cannotContainSpace
    ])
  });

  get userName(){
    return this.form.get('userName');
  }
  get password(){
    //console.log(this.form.get('password'))
    return this.form.get('password');
  }
}
