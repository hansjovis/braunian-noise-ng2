import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NewArticleService } from '../../../../services/new-article-service/new-article.service';
import { ArticlePreview } from '../../../../model/article-preview';
import { AuthenticateService } from '../../../../services/authenticate-service/authenticate.service';
import { ArticleCategory } from '../../../../model/article-category';
import { DeleteArticleDialogComponent } from './delete-article-dialog/delete-article-dialog.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: ArticlePreview[];
  @Input() activeCategories: ArticleCategory[];
  @ViewChild( DeleteArticleDialogComponent ) deleteArticleDialog: DeleteArticleDialogComponent; 

  constructor(private articleService: NewArticleService,
              private authenticateService: AuthenticateService) { }

  ngOnInit() {
    this.activeCategories = [];
    this.getArticles();
  }
  
  /**
   * Checks whether a user is logged in or not.
   * @returns true if a user is logged in, false when not.
   */
  public isLoggedIn(): boolean {
    return this.authenticateService.userLoggedIn();  
  }
  
  /**
   * Checks whether the categories of the given article 
   * includes all of the given categories.
   * @param article the article to check.
   * @param categories the categories to check.
   * @return true if all of the given categories are included in the article's categories.  
   */
  public articleHasCategories(article: ArticlePreview, categories: string[]): boolean {
    return categories.every(id => article.categories.some(category => category._id === id));
  }

  /**
   * Retrieves the list of articles.
   */
  private getArticles(): void {
    this.articleService.getArticlePreviews()
        .subscribe(articles => {
          console.log(articles);
          this.articles = articles;
        });
  }

  /**
   * Shows the delete article dialog.
   */
  private showDeleteDialog(article: ArticlePreview): void {
    this.deleteArticleDialog.show(article);
  }

}
