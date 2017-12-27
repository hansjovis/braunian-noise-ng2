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
    
  constructor(private http: HttpClient) { }

  /**
   *  
   */
  public login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.loginRoute, {username: username, password: password}, httpOptions)
      .pipe(
        tap(user => localStorage.setItem('bn-user', JSON.stringify(user))), // Store user in the browser's local storage. 
        catchError(this.handleError<User>('login'))
      );
  }

  /**
   *  Gets the user that is currently logged in.
   */
  public getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem('bn-user'));
  }
  
  /**
   *  Is a user (admin) currently logged in?
   */
  public userLoggedIn(): boolean {
    return localStorage.getItem('bn-user') != undefined;  
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    // Return error-handling function.
    return (error: any): Observable<T> => {   
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };  
  }
  
}
