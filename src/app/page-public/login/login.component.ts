import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  public corpo: string = '';

  constructor(public dialog: MatDialog) {
    this.corpo = 'sign-in-js'
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(EsqueciSenhaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
