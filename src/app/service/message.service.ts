import { Injectable } from "@angular/core";


@Injectable()
export class MessageService {
    private message: string;
    private type: string;
    
    public getMessage() {
        return this.message;
    }
    public setMessage(message) {
        this.message = message;
    }

    // public showMessage() {
    //     const element = document.getElementById("modalMessage")
    //     element.classList.add("show")
    // }
    // public closeMessage() {
    //     const element = document.getElementById("modalMessage")
    //     element.classList.remove("show")
    // }
    public callMessage(component, code) {
        switch (component) {
            case 'app-login':
                switch (code) {                    
                    case 400:
                        this.type = 'error';
                        this.message = 'Senha incorreta';
                    break;
                    case 404:
                        this.type = 'error';
                        this.message = 'Usuário incorreto';
                    break;
                    case 500:
                        this.type = 'error';
                        this.message = 'Algo deu errado';
                    break;
                    default:
                        this.type = 'error';
                        this.message = code;
                    break;                
                }                    
            break;
            case 'app-cadastro':
                switch (code) {
                    case 201:                        
                        this.message = 'Cadastrado com sucesso';
                    break;
                    case 400:
                        this.type = 'error';
                        this.message = 'Usuário já existe';
                    break;
                    case 500:
                        this.type = 'error';
                        this.message = 'Algo deu errado';
                    break;
                    default:
                        this.type = 'error';
                        this.message = code;
                    break;              
                }                  
            break;
            
        }
        //this.showMessage();
    }
}