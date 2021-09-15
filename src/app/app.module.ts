import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu-component/menu-component.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ModalMessageComponent } from './pages/modal-message/modal-message.component'
import { MessageService } from './service/message.service';
import { UsersService } from './service/users.service';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
  {path: 'contato', component: ContatoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'message', component: ModalMessageComponent},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: 'menu', component: MenuComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContatoComponent,
    LoginComponent,
    PokedexComponent,
    CadastroComponent,
    ModalMessageComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,      
    ),
    HttpClientModule,
    SharedModule,
  ],
  providers: [MessageService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
