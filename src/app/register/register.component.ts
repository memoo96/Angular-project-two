import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';  



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user = {
    username:"",
    password:"",
    email:"",
    address:"",
    birthdate:""
  }

  verificationform:string=" ";

  mySubmit({value,valid}){
    if(valid){
      this.verificationform= value.username +" / "+ value.password +" / "+ value.email +" / "+ value.address +" / "+ value.birthdate;
      this.document.location.href = 'http://localhost:4200/successful-register';
    }
    else{
      this.verificationform="Not Valid";
    }
  }

  constructor(@Inject(DOCUMENT) private document: any) {}


  ngOnInit() {
  }

}
