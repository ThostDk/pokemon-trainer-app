import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonButtonComponent } from './components/pokemon-button/pokemon-button.component';
import { MyPokemonsComponent } from './components/my-pokemons/my-pokemons.component';
import { RemovePokemonButtonComponent } from './components/remove-pokemon-button/remove-pokemon-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    PokemonCataloguePage,
    TrainerPage,
    LoginFormComponent,
    PokemonListComponent,
    PokemonButtonComponent,
    MyPokemonsComponent,
    RemovePokemonButtonComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
