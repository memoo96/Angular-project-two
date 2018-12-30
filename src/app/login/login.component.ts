import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = {
    username:"",
    password:"",
  }

  verificationform:string=" ";

  mySubmit({value,valid}){
    if(valid){
      this.verificationform= value.username +" / "+ value.password;
      this.document.location.href = 'http://localhost:4200/successful-login';
    }
    else{
      this.verificationform="Not Valid";
    }
  }

  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit() {
  }
  

}
