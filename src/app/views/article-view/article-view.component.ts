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

  @ViewChild( ArticleEditCatDialogComponent ) editCatDialog: ArticleEditCatDialogComponent;

  categories: ArticleCategory[];
  activeCategories: string[];
  
  categoryToEdit: string;

  constructor(private categoryService: ArticleCategoryService,
              private authenticateService: AuthenticateService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
  
  logOut(): void {  
    this.authenticateService.logOut();
  }
  
  isLoggedIn(): boolean {
    return this.authenticateService.userLoggedIn();  
  }
  
  getLoggedInUser(): User {
    return this.authenticateService.getLoggedInUser();
  } 
  
  toggleCategory(id: string): void { 
  
    this.categories.forEach(cat => {
      if(cat._id === id) {
        cat.active = cat.active? false : true ;
      }
    });    
    
    this.activeCategories = this.categories
      .filter(cat => cat.active)
      .map(cat => cat._id);
  }
  
  editCategory(id?: string): void {
    if(id != undefined) {
      var selectedCat = this.categories.filter(cat => cat._id === id)[0];
      console.log(selectedCat);  
      this.editCatDialog.show(selectedCat);
    }
    else {
      this.editCatDialog.show();
    }    
  }
}
