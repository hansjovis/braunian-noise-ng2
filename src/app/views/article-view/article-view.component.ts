import { Component, OnInit, ViewChild } from '@angular/core';

import { ArticleCategory } from '../../model/article-category'; 
import { User } from '../../model/user'; 

import { ArticleCategoryService } from '../../services/article-category-service/article-category.service';
import { AuthenticateService } from '../../services/authenticate-service/authenticate.service';

import { ArticleEditCatDialogComponent } from './article-edit-cat-dialog/article-edit-cat-dialog.component';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  activeCategories: string[];

  constructor( private authenticateService: AuthenticateService ) {

  }

  ngOnInit() {

  }

  getLoggedInUser(): User {
    return this.authenticateService.getLoggedInUser();
  } 

  isLoggedIn(): boolean {
    return this.authenticateService.userLoggedIn();  
  }

  logOut(): void {  
    this.authenticateService.logOut();
  }

  onActiveCategoriesChanged(categories : string[]) {
    this.activeCategories = categories;
  }
}
