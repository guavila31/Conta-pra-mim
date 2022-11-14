import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  // public btnSignin = document.querySelector("#signin");
  // public btnSignup = document.querySelector("#signup");
  // public body = document.querySelector("body");

  public corpo: string = '';

  constructor() {
    this.corpo = 'sign-in-js'
  }

  ngOnInit(): void {
  }

  singIn() {
    if (this.corpo == "sign-in-js") {
      this.corpo = "sign-up-js";
      console.log("singUp")
    } else {
      this.corpo = "sign-in-js";
      console.log("singIn")
    }
  }

}
