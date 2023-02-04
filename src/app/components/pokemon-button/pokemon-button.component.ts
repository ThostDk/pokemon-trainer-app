import { Component, Input,OnInit } from '@angular/core';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-pokemon-button',
  templateUrl: './pokemon-button.component.html',
  styleUrls: ['./pokemon-button.component.css']
})
export class PokemonButtonComponent {
  myPokemons: any[] = [];
  @Input() pokemonName: string = "";

  constructor(private pokeCatalogueService: PokemonCatalogueService){}
  ngOnInit(): void {}
  addPokemonClick = () =>{
    this.pokeCatalogueService.getPokemonData(this.pokemonName).subscribe((response: any) => {
      this.myPokemons.push(response);
      console.log(this.pokemonName.toString())
    })
  } 
}
