import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';

const { apiPokemons, apiTrainers } = environment;

@Injectable({
  providedIn: 'root',
})
export class PokemonCatalogueService {
  constructor(private readonly http: HttpClient) {}
  // fetches the poke api data and limits the returned count to spare the api
  fetchPokeApiData(number: number) {
    return this.http.get(`${environment.apiPokemons}?limit=${number}`);
  }
  // gets the actual pokemon data by name
  getPokemonData(name: string) {
    return this.http.get(`${environment.apiPokemons}${name}`);
  }
  addPokemonToTrainer(){
    //needs to be able to add the clicked pokemon to the trainers pokemon array
  }
}
