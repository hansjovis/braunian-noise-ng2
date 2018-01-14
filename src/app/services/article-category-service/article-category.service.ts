import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ArticleCategory } from '../../model/article-category';
import { MOCK_ARTICLE_CATEGORIES } from '../mock-article-categories';

@Injectable()
export class ArticleCategoryService {

  private static API_URL = "/api/";

  constructor() { }
  
  getCategories(): Observable<ArticleCategory[]> {
    return of(MOCK_ARTICLE_CATEGORIES);
  }

  saveCategory(category: ArticleCategory): void {

  }

}
