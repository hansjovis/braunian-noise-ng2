import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleCategory } from '../../../../../model/article-category';

import { ArticleCategoryService } from '../../../../../services/article-category-service/article-category.service';

@Component({
  selector: 'app-article-categories-edit',
  templateUrl: './article-categories-edit.component.html',
  styleUrls: ['./article-categories-edit.component.css']
})
export class ArticleCategoriesEditComponent implements OnInit {

  /** All available categories. */
  private allCategories: ArticleCategory[];
  /** All currently selected categories. */
  @Input() public activeCategories: ArticleCategory[];

  private inactiveCategories: ArticleCategory[];

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
        this.allCategories = categories;

        this.inactiveCategories = this.difference(this.allCategories, this.activeCategories);

        this.nonActive = this.activeCategories.length === 0;
      }
    );
  }

  /**
   * Returns the elements in set1 that are not included in set2
   * 
   * @param set1 the first set
   * @param set2 the second set
   */
  private difference(set1: ArticleCategory[], set2: ArticleCategory[]): ArticleCategory[] {
    return set1.filter(elem1 => !set2.find(elem2 => elem1._id === elem2._id));
  }

  /**
   * Sets this component in edit mode.
   * @param editMode whether to activate edit mode (true) or inactivate edit mode (false)
   */
  private setEditMode(editMode: boolean) {
    this.editMode = editMode;
  }

  /**
   * Moves the first element for which the given predicate is true
   * from an array to another array.
   * 
   * @param from array to remove element from
   * @param to array to append element to
   * @param predicate predicate to find element in `from`
   */
  private move(from: any[], to: any[], predicate: (elem) => boolean) {
    let index = from.findIndex(predicate);

    to.push(from[index]);    
    from.splice(index, 1);
  }

  /**
   * Activates or inactivates a category.
   * @param categoryId ID of the category to set to active or inactive
   * @param active whether the category with the given ID should be set to active (true) or inactive (false)
   */
  private setActive(categoryId: string, active: boolean) {

    let predicate = category => category._id === categoryId
    
    if (active) {
      this.move(this.inactiveCategories, this.activeCategories, predicate);
    } else {
      this.move(this.activeCategories, this.inactiveCategories, predicate);
    }
    
    this.nonActive = this.activeCategories.length === 0;

    this.change.emit(this.activeCategories);
  }

}
