import { Component, Input, OnInit } from '@angular/core';
import $ from 'jquery';
import { IPkmData } from './interfaces/pkmData.interface';
import { UsersService } from '../../../service/users.service';

@Component({
  selector: 'app-pkm-card',
  templateUrl: './pkm-card.component.html',
  styleUrls: ['./pkm-card.component.scss']
})
export class PkmCardComponent implements OnInit {
  @Input() pkmData: IPkmData;
  spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  public selectedPokemon;
  public selectedPokemonList = this.usersService.getUserTeam();

  constructor(private usersService: UsersService) {

   }

  ngOnInit() {
  }


  public selectPokemon(pokemon, i){    
    this.selectedPokemonList[i] = pokemon.id;
    this.usersService.savePokemonList(pokemon, i).subscribe((response) =>{

    }, (error) => {
      
    })        
  }

  public chooseOpen(id){    
    $('.chooseContainer').removeClass('open');
    $(`.chooseContainer.${id}`).addClass('open');
  }
  public chooseClose(id){     
    $(`.chooseContainer.${id}`).removeClass('open');
  }

}
