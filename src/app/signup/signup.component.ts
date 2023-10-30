import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  myForm : FormGroup ;

  constructor (){
    this.myForm = new FormGroup({
      Name : new FormControl ('' , [
        Validators.required,
        Validators.minLength(3),
      ]),
      userName : new FormControl ('' , [
        Validators.required,
        Validators.minLength(3),
      ]),
      Email : new FormControl ( '' , [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}"),
      ]),
      Password : new FormControl ( '' , [
        Validators.required,
        Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"),
      ]),
    })

  }

  handleFormSubmit() {

    console.log(this.myForm)
  }

}
