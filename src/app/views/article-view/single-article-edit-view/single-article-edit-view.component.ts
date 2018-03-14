import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-article-edit-view',
  templateUrl: './single-article-edit-view.component.html',
  styleUrls: ['./single-article-edit-view.component.css']
})
export class SingleArticleEditViewComponent implements OnInit {

  private articleID: String;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.articleID = this.route.snapshot.paramMap.get('id');
  }

}
