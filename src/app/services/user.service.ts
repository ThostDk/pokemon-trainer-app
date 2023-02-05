import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user?: User;
  public get pokemonCount(): number{
    return this._user? this._user.pokemon.length : 0
  }
  public get user(): User | undefined {
    return this._user;
  }
  // Storing user 
  set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }
  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
   
   }
   // returns a temporary array without the pokemon marked for deletion 
   public removePokemon(pokemonName: string): string[]{
    let tmpArr = [];
      return tmpArr = this._user? this._user.pokemon.filter(e => e !== pokemonName ) : []
   }
   // check if the user have the pokemon in its pokemon array
   public havePokemon(pokemonName: string): boolean{
    if(this._user)
    {
      return Boolean(this._user?.pokemon.find((pokemon: string) => pokemon === pokemonName))
    }
    return false;
   }
}
