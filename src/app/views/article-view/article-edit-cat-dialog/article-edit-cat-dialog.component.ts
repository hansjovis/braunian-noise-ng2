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
  @ViewChild( 'icon' ) icon: ElementRef;

  selectedCategory: ArticleCategory;

  selectedIcon: string;
  
  constructor() { }

  ngOnInit() {
    this.selectedCategory = new ArticleCategory();
  }
  
  /**
   * Event listener triggered whenever the icon text field is changed.
   * @param event the onchange event that has been triggered by the icon text field.
   */
  onIconChange() {
    
  }
  
  show(category?: ArticleCategory): void {
  
    this.selectedCategory = category;
  
    // Pre-populate the fields, if category exists.
    this.title.nativeElement.value = category? category.title : "";
    this.description.nativeElement.value = category? category.description : "";
    this.icon.nativeElement.value = category? category.icon : "";
    
    this.editCategoryModal.show();
  }

}
