import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';
import { UserService } from './user.service';

const { apiPokemons, apiTrainers, apiKey } = environment;

@Injectable({
  providedIn: 'root',
})
export class PokemonCatalogueService {
  private _loading: boolean = false;

  get loading(): boolean{
    return this._loading;
  }

  constructor(
    private readonly http: HttpClient,
    private readonly userService: UserService,
    ) {}
  // fetches the poke api data and limits the returned count to spare the api
  fetchPokeApiData(number: number) {
    return this.http.get(`${environment.apiPokemons}?limit=${number}`);
  }
  // gets the actual pokemon data by name
  getPokemonData(name: string) {
    return this.http.get(`${environment.apiPokemons}${name}`);
  }
  // function that removes the selected pokemon from the users api if it matches the current users existing pokemon
  removePokemonFromTrainer(pokemonName:string): Observable<User>{
    if (!this.userService.user) {
      throw new Error("There is no user to remove the pokemon from");
    }
    const trainer: User = this.userService.user;
    if (!this.userService.havePokemon(pokemonName)){
      throw new Error("you don't have this pokemon");
    }

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey
    })
    
    this._loading = true;

    return this.http.patch<User>(`${apiTrainers}/${trainer.id}`, {
      pokemon: this.userService.removePokemon(pokemonName)
    }, {
      headers
    })
    .pipe(
      tap((updatedUser: User) => {
        this.userService.user = updatedUser
      }),
      finalize(() =>{
        this._loading = false;
      })
    )
  }
  // function that adds the clicked pokemon to the user api if the user dont have it already
  addPokemonToTrainer(pokemonName:string): Observable<User>{
    console.log("trying to add: " + pokemonName)
    //needs to be able to add the clicked pokemon to the trainers pokemon array
    if (!this.userService.user) {
      throw new Error("There is no user to add the pokemon to");
    }
    const trainer: User = this.userService.user;
    const pokemon: string | undefined = pokemonName
    if (!pokemon){
      throw new Error("No pokemon is selected");
    }
    if (this.userService.havePokemon(pokemonName)){
      throw new Error("You already have this pokemon");
    }

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey
    })
    
    this._loading = true;

    return this.http.patch<User>(`${apiTrainers}/${trainer.id}`, {
      pokemon: [...trainer.pokemon, pokemonName]
    }, {
      headers
    })
    .pipe(
      tap((updatedUser: User) => {
        this.userService.user = updatedUser
      }),
      finalize(() =>{
        this._loading = false;
      })
    )
  }
}
