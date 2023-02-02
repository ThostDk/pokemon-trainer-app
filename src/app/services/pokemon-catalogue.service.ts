import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const { apiPokemons } = environment;
@Injectable({
  providedIn: 'root',
})
export class PokemonCatalogueService {
  constructor(private readonly http: HttpClient) {}

  public findAllPokemons(): void {
    this.http.get(apiPokemons).subscribe({
      next: () => {},
      error: () => {
        
      },
    });
  }
}
