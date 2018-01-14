import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ArticleCategory } from '../../../model/article-category'; 

import { ModalComponent } from '../../../helper/modal/modal.component';
import { createTemplateData } from '@angular/core/src/view/refs';

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

    this.category = category? category.clone() : new ArticleCategory();
  
    this.editCategoryModal.show();
  }

}
