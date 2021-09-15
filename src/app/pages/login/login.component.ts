import { Component } from '@angular/core';
import { Router } from '@angular/router';//rota
import { HttpClient } from '@angular/common/http';//para leitura de HTTP
import { environment } from 'src/environment';//exportando o environment
import { MessageService } from 'src/app/service/message.service';
import { UsersService } from 'src/app/service/users.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent { //class do componente de login, toda ação que acontece no componente as funções ficaram aqui
  //ele tem 2 atributos que sao o user e seu password
  public passwordIcon: string = "visibility_off"; 
  public passwordType: string = "password";
  private user: string = 'kakinha';
  private password: string = '12345'; 
  private gender: number;
  
  constructor(private router: Router, private http: HttpClient, 
    private messageService: MessageService, private usersService: UsersService) { 

  } 
  public getUser(){
    return this.user;
  }
  public getGender(){
    return this.gender;
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
  public setGender(gender: number){
    this.gender=gender;
  }
  public login(){     
    if(!this.getUser() || !this.getPassword()){
      this.messageService.callMessage('app-login','Preencha todos os campos')
    }else if(this.getUser().length && !this.getPassword() || !this.getUser() && this.getPassword().length) { 
      this.messageService.callMessage('app-login','Preencha todos os campos')
    }else{
        this.http.post(`${environment.endpoints.users}/authenticate`, {//string especial `${}` onde concatena a string mais simples 
        user: this.getUser(), password: this.getPassword()//post passando minhas variaveis para o back end
      }).subscribe((response: any) =>{  //res do back, ele entra direto no subscribe se a resposta for um sucesso (200)
        this.router.navigateByUrl('/menu')
        console.log('response: ', response)
        this.usersService.setUserId(response.userId)
        this.usersService.setUserName(response.user)        
        this.usersService.setUserGender(response.gender)          
        this.usersService.setUserTeam(response.team)        
      }, (error) =>{ //se o res for um erro (400,404,500) ele entra direto no error
        this.messageService.callMessage('app-login',error.status)       
        console.log(error.status)
      })
    }    
  }  
  public windowOpenCadastro() { 
    this.messageService.setMessage(null);
    const element = document.getElementById("modalContainer");   
    element.classList.add("modalOpenContainer");     
  }  
  
  public changePasswordType() {
    this.passwordType = this.passwordType === "password" ? "text" : "password";
    this.passwordIcon = this.passwordIcon === "visibility" ? "visibility_off" : "visibility";
  }
}
