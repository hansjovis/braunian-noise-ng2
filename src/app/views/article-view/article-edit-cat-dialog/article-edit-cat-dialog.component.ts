import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ArticleCategory } from '../../../model/article-category'; 

import { ModalComponent } from '../../../helper/modal/modal.component';
import { createTemplateData } from '@angular/core/src/view/refs';
import { ArticleCategoryService } from '../../../services/article-category-service/article-category.service';

@Component({
  selector: 'app-article-edit-cat-dialog',
  templateUrl: './article-edit-cat-dialog.component.html',
  styleUrls: ['./article-edit-cat-dialog.component.css']
})
export class ArticleEditCatDialogComponent implements OnInit {
 

  @ViewChild( ModalComponent ) editCategoryModal: ModalComponent;

  category: ArticleCategory;

  error: string;
  
  /**
   * Makes a new category edit dialog.
   * @param {ArticleCategoryService} categoryService provides methods to retrieve, update and delete article categories.
   */
  constructor(private categoryService: ArticleCategoryService) { }

  ngOnInit() {
    this.category = new ArticleCategory();
  }

  /**
   * Hides the edit dialog, removes any error messages.
   */
  public hide() {
    this.error = null;
    this.editCategoryModal.hide();
  }
  
  /**
   * Show the dialog to edit a category / make a new one.
   * @param {ArticleCategory} category the category to show (if left out, an empty dialog is shown instead)
   */
  public show(category?: ArticleCategory): void {

    this.category = category? category.clone() : new ArticleCategory();
    this.error = null;
  
    this.editCategoryModal.show();
  }

  /**
   * Saves the category currently being edited in the edit category dialog.
   */
  public save(): void {

    this.categoryService.saveCategory(this.category).toPromise()
      .then(value => {
        console.log(value);
        this.editCategoryModal.hide();
      },
      error => this.error = error.error);

  }

}
