import { Component } from '@angular/core';
import { Router } from '@angular/router';//rota
import { HttpClient } from '@angular/common/http';//para leitura de HTTP
import { environment } from 'src/environment';//exportando o environment
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent { //class do componente de login, toda ação que acontece no componente as funções ficaram aqui
  //ele tem 2 atributos que sao o user e seu password
  private user: string;
  private password: string;
  
  constructor(private router: Router, private http: HttpClient) { 

  } 
  public getUser(){
    return this.user;
  }
  public getPassword(){
    return this.password;
  }
  public setUser(user: string){
    this.user=user;
  }
  public setPassword(password: string){
    this.password=password;
  }
  public login(){    
    // this.http.post(`${environment.endpoints.users}/authenticate`, {
    //   user: this.getUser(), password: this.getPassword()
    // }).subscribe((response) =>{

    // }, (error) =>{
    //   console.log(error)
    // })

    //rota da conexão e a validação do usuario e senha
    this.http.post(`${environment.endpoints.users}/authenticate`, {//string especial `${}` onde concatena a string mais simples 
      user: this.getUser(), password: this.getPassword()//post passando minhas variaveis para o back end
    }).subscribe((response) =>{  //res do back, ele entra direto no subscribe se a resposta for um sucesso (200)
      this.router.navigateByUrl('/menu')
      console.log(response)
    }, (error) =>{ //se o res for um erro (400,404,500) ele entra direto no error
      if(error.status===400) {
        alert('senha incorreta')
      }else if (error.status===404) {
        alert('usuario incorreto')
      }else{
        alert('algo deu errado')
      }
      console.log(error.status)
    })
  } 
  // public windowCadastro() {
  //   window.open("cadastro", "windowCadastro")
  // }
  public windowOpenCadastro() { 
    const element = document.getElementById("modalContainer");   
    element.classList.add("modalOpenContainer");     
  }                                                                                      
}
