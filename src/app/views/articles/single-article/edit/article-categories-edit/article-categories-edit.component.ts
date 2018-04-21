import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleCategory } from '../../../../../model/article-category';

import { ArticleCategoryService } from '../../../../../services/article-category-service/article-category.service';

@Component({
  selector: 'app-article-categories-edit',
  templateUrl: './article-categories-edit.component.html',
  styleUrls: ['./article-categories-edit.component.css']
})
export class ArticleCategoriesEditComponent implements OnInit {

  @Input() public categories: ArticleCategory[]
  @Output() public change: EventEmitter<ArticleCategory[]> = new EventEmitter(); 

  private editMode: boolean;
  /** If any category is set to active (e.g. added to the article). */
  private nonActive: boolean;

  constructor(
    private categoryService: ArticleCategoryService
  ) { }

  ngOnInit() {
    this.editMode = false;
    this.loadAvailableCategories();
  }

  /**
   * Loads all available categories that the user can
   * append to the article.
   */
  private loadAvailableCategories(): void {
    this.categoryService.getCategories().subscribe(
      categories => {
        this.categories = categories
        this.nonActive = this.categories.every(category => !category.active);
      }
    );
  }

  /**
   * Sets this component in edit mode.
   * @param editMode whether to activate edit mode (true) or inactivate edit mode (false)
   */
  private setEditMode(editMode: boolean) {
    this.editMode = editMode;
  }

  /**
   * Activates or inactivates a category.
   * @param categoryId ID of the category to set to active or inactive
   * @param active whether the category with the given ID should be set to active (true) or inactive (false)
   */
  private setActive(categoryId: string, active: boolean) {
    let category = this.categories.find(category => category._id === categoryId);
    category.active = active;
    this.nonActive = this.categories.every(category => !category.active);
    this.change.emit(this.categories);
  }

}
