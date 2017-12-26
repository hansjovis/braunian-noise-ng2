import { Component, OnInit, Input } from '@angular/core';

import { ArticleService } from '../../../services/article-service/article.service';
import { Article } from '../../../model/article';
import { ArticleCategory } '../../../model/article-category';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[];
  @Input() activeCategories: string[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.activeCategories = [];
    this.getArticles();
  }
  
  articleHasCategories(article: Article, categories: string) {
    return categories.every(cat => article.categories.includes(cat));
  }

  getArticles(): void {
    this.articleService.getArticles()
        .subscribe(articles => this.articles = articles);
  }

}
