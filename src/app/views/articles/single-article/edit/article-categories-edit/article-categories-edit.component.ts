import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleCategory } from '../../../../../model/article-category';

import { ArticleCategoryService } from '../../../../../services/article-category-service/article-category.service';

@Component({
  selector: 'app-article-categories-edit',
  templateUrl: './article-categories-edit.component.html',
  styleUrls: ['./article-categories-edit.component.css']
})
export class ArticleCategoriesEditComponent implements OnInit {

  @Input() public categories: String[]
  private allCategories: ArticleCategory[]
  @Output() public change: EventEmitter<String[]> = new EventEmitter(); 

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
        this.allCategories = categories;
        // Set all selected categories to active.
        let selectedCategories = this.allCategories.filter(cat => this.categories.includes(cat._id));
        selectedCategories.forEach(cat => cat.active = true);
        
        this.nonActive = selectedCategories.length === 0;
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

    let category = this.allCategories.find(category => category._id === categoryId);
    category.active = active;

    this.categories = this.allCategories
      .filter(category => category.active)
      .map(category => category._id);

    this.nonActive = this.categories.length === 0;

    this.change.emit(this.categories);
  }

}
