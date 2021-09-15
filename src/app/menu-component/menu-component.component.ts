import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router'; 
import { TYPE_POKEMON } from '../constants/typepokedex.constants';


@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponent implements OnInit {
  public pokedex = require('../pokedex.json');
  public pokemonType = "";
  public spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  public viewMode = 'cards';
  public pokemonTypes = TYPE_POKEMON;
 
  constructor(public usersService: UsersService, private router: Router) { 
    if(usersService.getUserName()===''){
      this.router.navigateByUrl('/login')
    }
  }

  ngOnInit() {
  }

  public filterPokedexByType(){    
    let filteredPokedex = [];
    this.pokedex.forEach(pokemon => {
      pokemon.type.forEach(type => {      
        if(type === this.pokemonType){
          filteredPokedex.push(pokemon);
        }
      });     
    });
    return filteredPokedex;       
  }
  

  public changeType(type){
    console.log(type)
    this.viewMode='cards';
    this.pokemonType=type;
  }  
}
