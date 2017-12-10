import { Injectable } from '@angular/core';

import { Article } from './article';
import { MOCK_ARTICLES } from './mock-articles'

@Injectable()
export class ArticleService {

  constructor() { }
  
  getArticles(): Article[] {
    return MOCK_ARTICLES;
  }

}
