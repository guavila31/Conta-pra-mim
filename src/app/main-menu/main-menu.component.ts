import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  public active: string;

  menus: any = [
    { rota: 'dashboard', titulo: 'Painel de controle', icone: "bi bi-pie-chart-fill" },
    { rota: 'input', titulo: 'movimentação', icone: "bi bi-cash-coin" },
    { rota: 'usuario', titulo: 'Empresa', icone: "bi bi-briefcase-fill" },
    { rota: 'cursos', titulo: 'Cursos', icone: "bi bi-book-half" },
    { rota: 'perfil', titulo: 'Perfil', icone: "bi bi-person" },
    { rota: '/public/home', titulo: 'Sair', icone: "bi bi-box-arrow-in-left" },
  ]
  constructor() {
    this.active = 'menu-active'
  }

  ngOnInit(): void {
  }

}
