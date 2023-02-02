import { Component, Input, OnInit } from '@angular/core';
import { concat, Subscription } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokeApiService } from 'src/app/services/poke-api.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  isLoading: boolean = false;
  subscriptionArr: Subscription[] = [];

  constructor(private pokeApiService: PokeApiService) {}

  get pokemons(): any[] {
    return this.pokeApiService.pokemons;
  }
  set subscription(subscription: Subscription) {
    this.subscriptionArr.push(subscription);
  }
  ngOnInit(): void {
    if(!this.pokemons.length){
      this.getPokemons();
    }
  }
  ngOnDestroy(): void {
    this.subscriptionArr.forEach((subscription) =>
      subscription ? subscription.unsubscribe() : false
    );
  }
  //@Input() pokemons: Pokemon[] = [];

  getPokemons(): void {
    this.isLoading = true;
    this.subscription = this.pokeApiService.getNext().subscribe(
      (response) => {
        this.pokeApiService.next = response.next;
        const details = response.results.map((i: any) =>
          this.pokeApiService.get(i.name)
        );
        this.subscription = concat(...details).subscribe((response: any) => {
          this.pokeApiService.pokemons.push(response);
        });
      },
      (error) => console.log('Error Occurred:', error),
      () => (this.isLoading = false)
    );
  }
  getType(pokemon: any): string {
    return this.pokeApiService.getType(pokemon);
  }
}
