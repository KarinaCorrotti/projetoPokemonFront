import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';//rota
import { HttpClient } from '@angular/common/http';//para leitura de HTTP
import { environment } from 'src/environment';//exportando o environment

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  private user: string;
  private password: string;
  private pokemon: number;

  constructor(private http: HttpClient) {

   }
   public getUser(){
    return this.user;
  }
  public getPassword(){
    return this.password;
  }
  public getPokemon(){
    return this.pokemon;
  }
  public setUser(user: string){
    this.user=user;
  }
  public setPassword(password: string){
    this.password=password;
  }
  public setPokemon(pokemon: number){
    this.pokemon=pokemon;
  }

  public windowCloseCadastro() { 
    const element = document.getElementById("modalContainer");   
    element.classList.remove("modalOpenContainer");     
  }  
  public register() { //função de pergunta e resposta do front
    if(!this.getUser() || !this.getPassword() || !this.getPokemon()) { //verifica se usuario, password e numero do pokemon estão vazios
      alert('Preencha todos os campos')
    }else{
      this.http.post(`${environment.endpoints.users}/registerUser`,{
        user: this.getUser(), password: this.getPassword(), pokemon: this.getPokemon()
      }).subscribe((response) =>{ //200 sucesso entao o usuário é criado com sucesso 
        alert('usuário criado com sucesso')
        console.log(response)
      }, (error) =>{
        console.log(error)
        if(error.status===400){          
          alert('usuário já existe')
        }else{
          alert('algo deu errado')
        }
        console.log(error)
      })
    }   
  }
}
