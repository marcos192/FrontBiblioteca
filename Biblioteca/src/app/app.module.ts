import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { LeitorComponent } from './leitor/leitor.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { CadLeitorComponent } from './cad-leitor/cad-leitor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnderecoComponent,
    LeitorComponent,
    NavBarComponent,
    CadLeitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    //HttpReaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
