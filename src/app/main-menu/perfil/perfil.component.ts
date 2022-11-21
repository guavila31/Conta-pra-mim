import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  emailTeste = "emailteste@hotmail.com"
  constructor() { }

  ngOnInit(): void {
  }

}
