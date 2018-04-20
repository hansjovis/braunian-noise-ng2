import { Component, OnInit, ViewChild } from '@angular/core';

import { ArticleCategory } from '../../../model/article-category'; 
import { User } from '../../../model/user'; 

import { ArticleCategoryService } from '../../../services/article-category-service/article-category.service';
import { AuthenticateService } from '../../../services/authenticate-service/authenticate.service';

@Component({
  selector: 'app-article-overview',
  templateUrl: './article-overview.component.html',
  styleUrls: ['./article-overview.component.css']
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
