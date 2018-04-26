import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ArticlePreview } from '../../model/article-preview';
import { MOCK_ARTICLES } from '../mock-articles';

@Injectable()
export class ArticleService {

  constructor() { }
  
  getArticles(): Observable<ArticlePreview[]> {
    return of(MOCK_ARTICLES);
  }

}
