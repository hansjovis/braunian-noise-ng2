import { Component, OnInit } from '@angular/core';

import { ArticleCategory } from '../../model/article-category'; 
import { ArticleCategoryService } from '../../services/article-category-service/article-category.service';
import { AuthenticateService } from '../../services/authenticate-service/authenticate.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  categories: ArticleCategory[];
  activeCategories: string[];
  loggedIn: boolean;

  constructor(private categoryService: ArticleCategoryService,
              private authenticateService: AuthenticateService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
  
  isLoggedIn(): boolean {
    return this.authenticateService.userLoggedIn();  
  }
  
  toggleCategory(id: string): void { 
  
    this.categories.forEach(cat => {
      if(cat.id === id) {
        cat.active = cat.active? false : true ;
      }
    });    
    
    this.activeCategories = this.categories
      .filter(cat => cat.active)
      .map(cat => cat.id);
  }
}
