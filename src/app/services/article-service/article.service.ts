import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Article } from '../../model/article';
import { MOCK_ARTICLES } from '../mock-articles'

@Injectable()
export class ArticleService {

  constructor() { }
  
  getArticles(): Observable<Article[]> {
    return of(MOCK_ARTICLES);
  }

}
