import { ObserversModule } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  imageUrl: string[] = [];
    
  pokemonCount: number = 20;
  constructor(
    private pokeCatalogueService: PokemonCatalogueService,
    private userService: UserService
  ) {}
  
  ngOnInit(): void {
    this.pokemons = [];
    this.imageUrl = [];
    this.renderPokemons(this.pokemonCount);
    
  }
  
  findPokemonCountSubmit(f: NgForm) {
    const nr = parseInt(f.value.nr);
    console.log(nr);
    if (isNaN(nr)) {
      console.log('input is not a number!');
    } else {
      this.pokemons = [];
      this.imageUrl = [];
      this.renderPokemons(nr);
      
    }
  }
  //check if the pokemon is captured and return a pokeball if so
  isCaptured = (name: string): void => {
    if (this.userService.havePokemon(name)) {
      this.imageUrl.push('https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png')
    } else {
      this.imageUrl.push('https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png')
    }
  };
  // get the api data and run through each of the pokemons
  // then get & push their inner data by name to the pokemon array
  
  renderPokemons = (count: number): void => {
    this.pokeCatalogueService
      .fetchPokeApiData(count)
      .subscribe((apiResponse: any) => {
        apiResponse.results.forEach((result: { name: string }) => {
          this.pokeCatalogueService
            .getPokemonData(result.name)
            .subscribe((dataResponse: any) => {
              this.pokemons.push(dataResponse);
              this.isCaptured(dataResponse.name)
            });
        });
        this.pokemons.sort(function(a, b) { 
          return a.id - b.id  ||  a.name.localeCompare(b.name);
        })
      });
  };
}
