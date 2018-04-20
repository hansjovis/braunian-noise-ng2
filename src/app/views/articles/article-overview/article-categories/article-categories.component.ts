import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { ArticleCategory } from '../../../../model/article-category'; 
import { User } from '../../../../model/user'; 

import { ArticleCategoryService } from '../../../../services/article-category-service/article-category.service';
import { AuthenticateService } from '../../../../services/authenticate-service/authenticate.service';

import { ArticleEditCatDialogComponent } from './article-edit-cat-dialog/article-edit-cat-dialog.component';

@Component({
  selector: 'app-article-categories',
  templateUrl: './article-categories.component.html',
  styleUrls: ['./article-categories.component.css']
})
export class ArticleCategoriesComponent implements OnInit {

  @ViewChild( ArticleEditCatDialogComponent ) editCatDialog: ArticleEditCatDialogComponent;

  categories: ArticleCategory[];
  activeCategories: string[];

  @Output() onChanged = new EventEmitter<String[]>();
  
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

  isLoggedIn(): boolean {
    return this.authenticateService.userLoggedIn();  
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

    // Let the parent know that the active categories have changed.
    this.onChanged.emit(this.activeCategories);
  }
  
  editCategory(id?: string): void {
    if(id != undefined) {
      var selectedCat = this.categories.find(cat => cat._id === id);
      this.editCatDialog.show(selectedCat);
    }
    else {
      this.editCatDialog.show();
    }    
  }
}
