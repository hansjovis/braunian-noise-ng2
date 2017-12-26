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
  
  private loggedInUser: User;
  
  constructor(private http: HttpClient) { }

  /**
   *  
   */
  public login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.loginRoute, {username: username, password: password}, httpOptions)
      .pipe(
        tap(user => this.loggedInUser = user),
        catchError(this.handleError<User>('login'))
      );
  }

  public getLoggedInUser(): User {
    return this.loggedInUser;
  }
  
  public userLoggedIn(): boolean {
    return this.loggedInUser != undefined;  
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
