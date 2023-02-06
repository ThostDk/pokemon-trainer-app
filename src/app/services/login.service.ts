import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageKeys } from '../enums/storage-keys.enum';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';


const { apiTrainers, apiKey } = environment;
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //Dependency Injection.
  constructor(private readonly http: HttpClient) { }
  
  public login(username: string): Observable<User> {
    return this.checkUsername(username)
    .pipe(
      switchMap((user: User | undefined) => {
        if (user === undefined) { // user does not exist
          return this.createUser(username);
        }
        return of(user);
      })
    )
  }
  public logout() {
    StorageUtil.storageRemove(StorageKeys.User)
  }
  
  // Check if user exists
  private checkUsername(username: string): Observable<User | undefined> {
    return this.http.get<User[]>(`${apiTrainers}?username=${username}`)
    .pipe(
      // RxJS Operators
      map((response: User[]) => response.pop())
    )
  }
  // Create User
  private createUser(username: string): Observable<User> {
    const user = {
      username,
      pokemon: []
    };

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    });

    return this.http.post<User>(apiTrainers, user, {
      headers
    })
    //user
    //headers -> API KEY
    //POST -create items on the server
  }

  // If User || Created User -> Store User
  
}
