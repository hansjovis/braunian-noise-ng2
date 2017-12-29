import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../../model/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticateService {

  private api = 'api/';  
  private loginRoute = this.api + 'login';
  private logoutRoute = this.api + 'logout';
    
  constructor(private http: HttpClient) { }

  /**
   *  
   */
  public login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.loginRoute, {username: username, password: password}, httpOptions)
      .pipe(tap(user => localStorage.setItem('bn-user', JSON.stringify(user)))); // Store user in the browser's local storage.       
  }
  
  public logOut(): void {
    this.http.get(this.logoutRoute, { responseType: 'text' })
      .subscribe(
        response => { localStorage.removeItem('bn-user') }); 
  }

  /**
   *  Gets the user that is currently logged in.
   */
  public getLoggedInUser(): User {
    var user = localStorage.getItem('bn-user');
    if(user) {
      return JSON.parse(user);
    }
    else {
      throw new Error('No user has been logged in!');
    }
  }
  
  /**
   *  Is a user (admin) currently logged in?
   */
  public userLoggedIn(): boolean {
    return localStorage.getItem('bn-user') != undefined;  
  }   
}
