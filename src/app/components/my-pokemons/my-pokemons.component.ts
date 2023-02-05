import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.component.html',
  styleUrls: ['./my-pokemons.component.css']
})
export class MyPokemonsComponent {
  pokemons: any[] = [];
  
  constructor(
    private pokemonService: PokemonService,
    private readonly userService: UserService,
    ) {}
  // get the api data and run through each of the pokemons
  // then get & push their inner data by name to the pokemon array
  renderMyPokemons = () => {
    this.pokemons = [];
    const count = this.userService.user? this.userService.pokemonCount : 0
    for (let i=0; i<count;i++){
      this.pokemonService
      .getPokemonData(this.userService.user? this.userService.user.pokemon[i]:"")
      .subscribe((dataResponse: any) => {
        this.pokemons.push(dataResponse);
      });
    }
    
  }
  isShowDivIf = false;  
    
  toggleDisplayPokemonInfo() {  
    this.isShowDivIf = !this.isShowDivIf;  
  }  
  
  ngOnInit(): void {
    this.renderMyPokemons();
  }
  
  
}
