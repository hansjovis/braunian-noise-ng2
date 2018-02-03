import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ArticleCategory } from '../../model/article-category';
import { MOCK_ARTICLE_CATEGORIES } from '../mock-article-categories';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ArticleCategoryService {

  private API_URL = "api/";
  private SAVE_URL = this.API_URL + "article_category/save";

  constructor(private http: HttpClient) { }
  
  getCategories(): Observable<ArticleCategory[]> {
    return of(MOCK_ARTICLE_CATEGORIES);
  }

  saveCategory(category: ArticleCategory): Observable<Object> {
    return this.http.post(this.SAVE_URL, category, httpOptions);
  }

}
