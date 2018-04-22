import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Article } from '../../model/article-new';
import { MOCK_ARTICLE_CATEGORIES } from '../mock-article-categories';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NewArticleService {

  private API_URL = "api/";
  private URL = this.API_URL + "article";

  constructor(private http: HttpClient) { }
  
  /**
   * Saves the given article.
   * @param article the article to save.
   * @returns the http response.
   */
  public saveArticle(article: Article): Observable<Object> {
    console.log(article);
    return this.http.post(this.URL, article, httpOptions);
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
