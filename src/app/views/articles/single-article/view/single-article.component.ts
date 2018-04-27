import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../../../../model/article';
import { ArticleCategory } from '../../../../model/article-category';
import { NewArticleService } from '../../../../services/new-article-service/new-article.service';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleViewComponent implements OnInit {

  private articleID: String;
  private article: Article;

  private categories: ArticleCategory[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private articleService: NewArticleService
  ) {

  }

  ngOnInit() {
    this.articleID = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(this.articleID).toPromise().then(
      article => this.article = article,
      error => console.error(error)
    );
  }

}
