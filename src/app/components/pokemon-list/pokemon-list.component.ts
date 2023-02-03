import { Component, OnInit } from '@angular/core';

import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  constructor(private pokeCatalogueService: PokemonCatalogueService) {}

  // get the api data and run through each of the pokemons
  // then get & push their inner data by name to the pokemon array
  ngOnInit(): void {
    this.pokeCatalogueService
      .fetchPokeApiData(20)
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
