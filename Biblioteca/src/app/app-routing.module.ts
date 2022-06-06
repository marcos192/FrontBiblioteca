import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeitorComponent } from './leitor/leitor.component';

const routes: Routes = [

  {path:"", component: HomeComponent},
  {path: "leitores", component: LeitorComponent},
  {path: "leitores/id", component: LeitorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
