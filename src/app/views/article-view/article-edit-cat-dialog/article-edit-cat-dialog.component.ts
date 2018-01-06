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
  @ViewChild( 'title' ) title: ElementRef;
  @ViewChild( 'description' ) description: ElementRef;

  selectedCategory: ArticleCategory;
  
  constructor() { }

  ngOnInit() {
  }
  
  show(category?: ArticleCategory): void {
  
    // Pre-populate the fields, if category exists.
    this.title.nativeElement.value = category? category.title : "";
    this.description.nativeElement.value = category? category.description : "";     
    
    this.editCategoryModal.show();
  }

}
