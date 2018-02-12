import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { ArticleCategory } from '../../model/article-category';
import { MOCK_ARTICLE_CATEGORIES } from '../mock-article-categories';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ArticleCategoryService {

  private API_URL = "api/";
  private URL = this.API_URL + "article_category";

  constructor(private http: HttpClient) { }
  
  /**
   * Retrieves a list of categories.
   * @returns {Observable<ArticleCategory[]>} an Observable containing an array of article categories.
   */
  public getCategories(): Observable<ArticleCategory[]> {
    return this.http.get<ArticleCategory[]>(this.URL)
      .pipe(
        map(this.mapToArticleCategories),
        catchError(this.handleError('getCategories', []))
      );
  }

  /**
   * Saves the given category.
   * @param category the category to save.
   * @returns the http response.
   */
  public saveCategory(category: ArticleCategory): Observable<Object> {
    return this.http.post(this.URL, category, httpOptions);
  }

  /**
   * Converts an array of POJO's to ArticleCategories.
   * @param objects the array of POJO's to map.
   */
  private mapToArticleCategories(objects) {
    return objects.map(
      category => 
        new ArticleCategory(category._id, category.icon, 
        category.title, category.description, category.active))
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
