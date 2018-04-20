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

  constructor(
    private categoryService: ArticleCategoryService
  ) { }

  ngOnInit() {
    this.editMode = false;
    this.loadAvailableCategories();
  }

  private loadAvailableCategories(): void {
    this.categoryService.getCategories().subscribe(
      categories => {
        this.categories = categories
      }
    );
  }

  private setEditMode(editMode: boolean) {
    this.editMode = editMode;
  }

  private setActive(categoryId: string, active: boolean) {
    let category = this.categories.find(category => category._id === categoryId);
    category.active = active;
    this.change.emit(this.categories);
  }

}
