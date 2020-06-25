import { Component, OnInit } from '@angular/core';

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
  public selectedPokemon;
  constructor() { }

  ngOnInit() {
    console.log(this.pokedex)
    console.log(this.pokedex[5].type.includes('Fire'))
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

  public selectPokemon(pokemon){
    this.viewMode='detail';
    this.selectedPokemon = pokemon;    
  }

  public changeType(type){
    this.viewMode='cards';
    this.pokemonType=type;
  }
    
}
