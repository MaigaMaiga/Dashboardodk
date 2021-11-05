import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterComponent } from './ajouter/ajouter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormateurComponent } from './formateur/formateur.component';
import { ListeComponent } from './liste/liste.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'ajouter', component:AjouterComponent},
  { path:"navbar", component:NavbarComponent},
  { path:"", component:DashboardComponent},
  { path:"formateur", component:FormateurComponent},
  { path:"list", component:ListeComponent},
  { path:"login",component:LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
