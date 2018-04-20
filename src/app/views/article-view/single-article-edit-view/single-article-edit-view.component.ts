import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuthenticateService } from '../../../services/authenticate-service/authenticate.service';

import { Article } from '../../../model/article-new';
import { TextRow } from '../../../model/article-rows/text-row';
import { ImageRow } from '../../../model/article-rows/image-row';

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
    private authenticateService: AuthenticateService
  ) { }

  ngOnInit() {
    this.articleID = this.route.snapshot.paramMap.get('id');

    if (this.articleID === 'new') {
      // New article.
      this.article = new Article();

      this.article.img_ref = "../../../../assets/articles/mock/placeholder-image600x300.jpg";
      this.article.date = Date.now();
      this.article.author = this.authenticateService.getLoggedInUser().screenname;
      this.article.rows = [];

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
      this.article.img_ref = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

}
