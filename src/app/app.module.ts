import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './page-public/landing-page/landing-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './page-public/login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PagePublicComponent } from './page-public/page-public.component';
import { NavbarMainComponent } from './component/navbar-main/navbar-main.component';
import { DashboardComponent } from './main-menu/dashboard/dashboard.component';
import { InputsComponent } from './main-menu/inputs/inputs.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { UserComponent } from './main-menu/user/user.component';
import { CursosComponent } from './main-menu/cursos/cursos.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EsqueciSenhaComponent } from './page-public/login/esqueci-senha/esqueci-senha.component';
import { PerfilComponent } from './main-menu/perfil/perfil.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    MainMenuComponent,
    PagePublicComponent,
    NavbarMainComponent,
    DashboardComponent,
    InputsComponent,
    UserComponent,
    CursosComponent,
    EsqueciSenhaComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
