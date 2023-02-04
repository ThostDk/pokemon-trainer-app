import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input,OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';
import { MyPokemonsComponent } from '../my-pokemons/my-pokemons.component';

@Component({
  selector: 'app-remove-pokemon-button',
  templateUrl: './remove-pokemon-button.component.html',
  styleUrls: ['./remove-pokemon-button.component.css']
})
export class RemovePokemonButtonComponent {

  
  @Input() pokemonName: string = "";
  
  get loading(): boolean {
    return this.pokeCatalogueService.loading;
  }

  constructor(
    private readonly pokeCatalogueService: PokemonCatalogueService,
    private readonly myPokemonsComponent: MyPokemonsComponent
    ){ }

  ngOnInit(): void { }

  // removes the selected pokemon from the user on click
  removePokemonClick = () =>{
    console.log(this.pokemonName.toString())
    this.pokeCatalogueService.removePokemonFromTrainer(this.pokemonName.toString()).subscribe({
      next: (response: User) => {
        console.log("NEXT", response);
        this.myPokemonsComponent.renderMyPokemons();
      },
      error: (error: HttpErrorResponse) => {
        console.log("ERROR", error.message)
      }
    })
    
  } 
}
