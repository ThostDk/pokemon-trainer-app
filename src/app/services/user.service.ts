import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';
// Video 6
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
  // responsible for storing user 
  set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }
  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
   
   }
    
   public havePokemon(pokemonName: string): boolean{
    if(this._user)
    {
      return Boolean(this._user?.pokemon.find((pokemon: string) => pokemon === pokemonName))
    }
    return false;
   }
}
