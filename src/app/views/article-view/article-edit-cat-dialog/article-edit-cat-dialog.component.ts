import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ArticleCategory } from '../../../model/article-category'; 

import { ModalComponent } from '../../../helper/modal/modal.component';

@Component({
  selector: 'app-article-edit-cat-dialog',
  templateUrl: './article-edit-cat-dialog.component.html',
  styleUrls: ['./article-edit-cat-dialog.component.css']
})
export class ArticleEditCatDialogComponent implements OnInit {
 

  @ViewChild( ModalComponent ) editCategoryModal: ModalComponent;

  category: ArticleCategory;
  
  constructor() { }

  ngOnInit() {
    this.category = new ArticleCategory();
  }
    
  show(category?: ArticleCategory): void {

    if(category) {
      // Clone category.
      this.category = {
        id: category.id,
        title: category.title,
        description: category.description,
        icon: category.icon,
        active: category.active
      }
    }
    else {
      // Make a new category.
      this.category = new ArticleCategory();
    }
  
    this.editCategoryModal.show();
  }

}
