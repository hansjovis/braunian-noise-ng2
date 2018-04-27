import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { TextRow } from '../../../../../../model/article-rows/text-row';

/** Markdown parser library. */
declare var showdown: any;

@Component({
  selector: 'app-text-row-edit',
  templateUrl: './text-row-edit.component.html',
  styleUrls: ['./text-row-edit.component.css']
})
export class TextRowEditComponent implements OnInit {

  inEditMode: boolean;
  @Input() row: TextRow;
  @ViewChild('textarea') textarea: any;
  converter: any;

  constructor() { }

  ngOnInit() {
    this.inEditMode = false;
    this.row.textRaw = "Hello World!";
    this.converter = new showdown.Converter();
  }

  public setEditMode(inEditMode): void {
    this.inEditMode = inEditMode;
    this.textarea.nativeElement.select();
    if (!inEditMode) {
      this.row.text = this.converter.makeHtml(this.row.textRaw);
    } 
  }
}
