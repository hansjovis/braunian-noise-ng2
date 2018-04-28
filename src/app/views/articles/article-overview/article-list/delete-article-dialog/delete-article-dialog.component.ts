import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../../../model/article';
import { ArticlePreview } from '../../../../../model/article-preview';
import { ModalComponent } from '../../../../../helper/modal/modal.component';
import { NewArticleService } from '../../../../../services/new-article-service/new-article.service';

@Component({
  selector: 'app-delete-article-dialog',
  templateUrl: './delete-article-dialog.component.html',
  styleUrls: ['./delete-article-dialog.component.css']
})
export class DeleteArticleDialogComponent implements OnInit {

  @ViewChild( ModalComponent ) modal: ModalComponent;
  @Output() onDelete = new EventEmitter<boolean>();
  private article: ArticlePreview;

  constructor(private articleService: NewArticleService) { }

  ngOnInit() {
  }

  cancel() {
    this.modal.hide();
  }

  delete() {
    this.articleService.delete(this.article._id).subscribe(
      id => {
        this.onDelete.emit(true);
        this.modal.hide()
      }
    );
  }

  hide() {
    this.modal.hide();
  }

  show(article: ArticlePreview) {
    this.article = article;
    this.modal.show();
  }

}
