import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  public active: string;

  menus: any = [
    { rota: 'dashboard', titulo: 'Painel de controle' },
    { rota: 'input', titulo: 'movimentação' },
    { rota: 'usuario', titulo: 'Usuario' },
    { rota: 'cursos', titulo: 'Cursos' },
  ]
  constructor() {
    this.active = 'menu-active'
   }

  ngOnInit(): void {
  }

}
