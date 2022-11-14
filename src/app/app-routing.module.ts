import { CursosComponent } from './main-menu/cursos/cursos.component';
import { DashboardComponent } from './main-menu/dashboard/dashboard.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginComponent } from './page-public/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './page-public/landing-page/landing-page.component';
import { PagePublicComponent } from './page-public/page-public.component';
import { InputsComponent } from './main-menu/inputs/inputs.component';
import { UserComponent } from './main-menu/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/public/home', pathMatch: 'full' },
  { path: 'public', component: PagePublicComponent, children:[
    { path: 'home', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
  ] },
  { path: 'main', component: MainMenuComponent, children:[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'input', component: InputsComponent },
    { path: 'usuario', component: UserComponent },
    { path: 'cursos', component: CursosComponent },
  ] },
  { path: '**', redirectTo: '/public/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
