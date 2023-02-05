import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input,OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-button',
  templateUrl: './pokemon-button.component.html',
  styleUrls: ['./pokemon-button.component.css']
})
export class PokemonButtonComponent {
  
  @Input() pokemonName: string = "";
  
  get loading(): boolean {
    return this.pokemonService.loading;
  }

  constructor(
    private readonly pokemonService: PokemonService,
    ){}
  ngOnInit(): void {}
  addPokemonClick = () =>{
    console.log(this.pokemonName.toString())
    this.pokemonService.addPokemonToTrainer(this.pokemonName.toString()).subscribe({
      next: (response: User) => {
        console.log("NEXT", response);
      },
      error: (error: HttpErrorResponse) => {
        console.log("ERROR", error.message)
      }
    })
    
  } 
}
