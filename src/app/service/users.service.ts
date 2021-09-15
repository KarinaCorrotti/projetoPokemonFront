import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { url } from 'inspector';
import { environment } from 'src/environment';
import { User } from '../model/user.model';

@Injectable()
export class UsersService{
    private user: User = new User();
    constructor(private http: HttpClient) { 
    
    } 

    public getUserId() {
        return this.user.userId;
    }
    public getUserName() {
        return this.user.userName;
    }
    public getUserPokemon() {
        return this.user.userPokemon;
    }    
    public getUserGender() {        
        return this.user.userGender;
    }
    public getUserTeam() {        
        return this.user.team;
    }

    public setUserId(userId: number) {
        this.user.userId = userId;
    }
    public setUserName(userName: string) {
        this.user.userName = userName;
    }
    public setUserPokemon(userPokemon: number) {
        this.user.userPokemon = userPokemon;
    }
    public setUserGender(userGender: number) {
        this.user.userGender = userGender;
    }
    public setUserTeam(team: number[]) {
        this.user.team = team;
    }

 

    public savePokemonList(pokemon, index){
        return this.http.put(`${environment.endpoints.users}/registerPokemon`, {userId: this.getUserId(), pokemon, index});
    }
}