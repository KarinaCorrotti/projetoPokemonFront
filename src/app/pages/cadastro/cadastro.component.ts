import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';//rota
import { HttpClient } from '@angular/common/http';//para leitura de HTTP
import { environment } from 'src/environment';//exportando o environment
import { MessageService } from 'src/app/service/message.service';
import $ from 'jquery';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  private user: string;
  private password: string;
  private repeatPassword: string;
  private gender: number;

  constructor(private http: HttpClient, public messageService: MessageService) {

   }
   public getUser(){
    return this.user;
  }
  public getPassword(){
    return this.password;
  }
  public getRepeatPassword(){
    return this.repeatPassword;
  }
  public getGender(){
    return this.gender;
  }
  public setUser(user: string){
    this.user = user;
  }
  public setPassword(password: string){
    this.password = password;
  }
  public setRepeatPassword(repeatPassword: string){
    this.repeatPassword = repeatPassword;
  }
  public setGender(gender: number){
    this.gender = gender;
  }

  public windowCloseCadastro() { 
    const element = document.getElementById("modalContainer");   
    element.classList.remove("modalOpenContainer");  
    this.messageService.setMessage(null);
  }  
  public register() { //função de pergunta e resposta do front    
    if(!this.getUser() || !this.getPassword() || !this.getRepeatPassword() || !this.getGender()) { //verifica se usuario, password e numero do pokemon estão vazios
      this.messageService.callMessage('app-cadastro','Preencha todos os campos')         
    }else if(this.getPassword() != this.getRepeatPassword()){
      this.messageService.callMessage('app-cadastro','As senhas não coincidem')
    }else{
      this.http.post(`${environment.endpoints.users}/registerUser`,{
        user: this.getUser(), password: this.getPassword(), gender: this.getGender()
      }).subscribe((response) =>{ //200 sucesso entao o usuário é criado com sucesso              
        $('.genderContainer img').removeClass('selected');
        this.messageService.callMessage('app-cadastro',201) 
        this.clearInputs()
        // alert('usuário criado com sucesso')       
      }, (error) =>{
        this.messageService.callMessage('app-cadastro',error.status)
        // console.log(error)
        // if(error.status===400){          
        //   alert('usuário já existe')
        // }else{
        //   alert('algo deu errado')
        // }
        console.log(error)
      })
    }   
  }
  public selectGender(element, gender) {   
    if(!$(element.target).hasClass('selected')){
      this.setGender(gender);
      $('.genderContainer img').removeClass('selected');
      $(element.target).addClass('selected');
    }   

  }
  public clearInputs() {
    this.setUser("");
    this.setPassword(null);
    this.setRepeatPassword(null); 
  }
}
