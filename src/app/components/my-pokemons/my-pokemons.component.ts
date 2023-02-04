import { Component } from '@angular/core';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';
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
    private pokeCatalogueService: PokemonCatalogueService,
    private readonly userService: UserService,
    ) {}

  // get the api data and run through each of the pokemons
  // then get & push their inner data by name to the pokemon array
  ngOnInit(): void {
    console.log(this.userService.user?.pokemon[0])
    const count = this.userService.user? this.userService.pokemonCount : 0
    for (let i=0; i<count;i++){
      this.pokeCatalogueService
      .getPokemonData(this.userService.user? this.userService.user.pokemon[i]:"")
      .subscribe((dataResponse: any) => {
        this.pokemons.push(dataResponse);
      });
    }
        
  }
  
  
}
