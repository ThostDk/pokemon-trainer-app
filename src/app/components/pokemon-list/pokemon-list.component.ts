import { ObserversModule } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon.model';
//import { }
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  pokemonCount: number = 20;
  constructor(private pokeCatalogueService: PokemonCatalogueService) {}

  // get the api data and run through each of the pokemons
  // then get & push their inner data by name to the pokemon array
  ngOnInit(): void {
    this.renderPokemons(this.pokemonCount);
  }
  
  findPokemonCountSubmit(f:NgForm) {
    const age = parseInt(f.value.age)
    console.log(age)
    if (isNaN(age)) {
      console.log("input is not a number!")
    } else {
      this.renderPokemons(age)
    }
  }
  renderPokemons = (count: number): void =>{
    this.pokemons = [];
    console.log("count: "+count)
    this.pokeCatalogueService
      .fetchPokeApiData(count)
      .subscribe((apiResponse: any) => {
         apiResponse.results.forEach((result: { name: string }) => {
          this.pokeCatalogueService
            .getPokemonData(result.name)
            .subscribe((dataResponse: any) => {
              this.pokemons.push(dataResponse);
            });
        });
      });
  }
  
}
