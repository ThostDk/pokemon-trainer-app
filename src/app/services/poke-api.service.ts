import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private _url: string = environment.apiPokemons;
  private _pokemons: any[] = [];
  private _next: string = '';

  constructor(private http: HttpClient) { }

  get pokemons(): any[] {
    return this._pokemons;
  }
  
  get next(): string {
    return this._next;
  }

  set next(next: string) {
    this._next = next;
  }

  // get(name : string): Observable<string> {
  //   const url = `${environment.apiPokemons}${name}`
  //   return this.http.get<string>(url);
  // }
  // getNext(): Observable<string> {
  //   const url = this.next === '' ? `${this._url}?limit=100` : this.next;
  //   return this.http.get<string>(url);
  // }
  // getSpeciesByName(name: string): Observable<string> {
  //   const SpeciesUrl = `${environment.apiPokemons}-species/${name}`
  //   return this.http.get<string>(SpeciesUrl)
  // }
  // getSpeciesById(id: string): Observable<string> {
  //   const SpeciesUrl = `${environment.apiPokemons}-species/${id}`
  //   return this.http.get<string>(SpeciesUrl)
  // }
  getType(pokemon: any): string {
    return pokemon && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';
  }

  get(name: string): Observable<any> {
    const url = `${this._url}${name}`;
    return this.http.get<any>(url);
  }

  getNext(): Observable<any> {
    const url = this.next === '' ? `${this._url}?limit=100` : this.next;
    return this.http.get<any>(url);
  }

  getEvolution(id: number): Observable<any> {
    const url = `${environment.apiPokemons}evolution-chain/${id}`;
    return this.http.get<any>(url);
  }

  getSpecies(name: string): Observable<any> {
    const url = `${environment.apiPokemons}pokemon-species/${name}`;
    return this.http.get<any>(url);
  }
}
