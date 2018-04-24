import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuthenticateService } from '../../../../services/authenticate-service/authenticate.service';
import { NewArticleService } from '../../../../services/new-article-service/new-article.service';

import { Article } from '../../../../model/article-new';
import { TextRow } from '../../../../model/article-rows/text-row';
import { ImageRow } from '../../../../model/article-rows/image-row';
import { ArticleCategory } from '../../../../model/article-category';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-single-article-edit-view',
  templateUrl: './single-article-edit-view.component.html',
  styleUrls: ['./single-article-edit-view.component.css']
})
export class SingleArticleEditViewComponent implements OnInit {

  private articleID: String;
  private article: Article;

  @ViewChild('headerImageUpload') headerImageUpload: any;  

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private authenticateService: AuthenticateService,
    private articleService: NewArticleService
  ) { }

  ngOnInit() {
    this.articleID = this.route.snapshot.paramMap.get('id');

    if (this.articleID === 'new') {
      // New article.
      this.article = new Article();

      this.article.header_img = new ImageRow();
      this.article.header_img.src = "../../../../assets/articles/mock/placeholder-image600x300.jpg";
      
      this.article.date = Date.now();
      this.article.author = this.authenticateService.getLoggedInUser().screenname;

    } else {
      // Retrieve existing article from server.
    }
  }

  addRow(type: string): void {
    if(type === "TEXT") {
      let newRow = new TextRow();
      this.article.rows.push(newRow);
    } else if(type === "IMAGE") {
      let newRow = new ImageRow();
      this.article.rows.push(newRow);
    }
  }

  /**
   * Triggers the upload of the header image.
   * (Showing a file upload dialog)
   */
  triggerUploadImage(): void {
    this.headerImageUpload.nativeElement.click();
  }

  onImageUpload(event): void {
    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.article.header_img.src = e.target.result;
    };

    let file = event.target.files[0];

    this.article.header_img.fileName = file.name;
    reader.readAsDataURL(file);
  }

  save(): void {

    this.articleService.saveArticle(this.article).toPromise()
      .then(
        response => console.log(response),
        error => console.error(error)
      );
  }

  deleteRow(rowIndex: number): void {
    this.article.rows.splice(rowIndex, 1);
  }

  /**
   * Sets the categories of the article.
   * @param categories array of category IDs
   */
  setCategories(categories: String[]) {
    this.article.categories = categories;
  }

}
