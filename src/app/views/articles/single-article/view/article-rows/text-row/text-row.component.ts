import { Component, OnInit, Input } from '@angular/core';
import { TextRow } from '../../../../../../model/article-rows/text-row';

@Component({
  selector: 'app-text-row',
  templateUrl: './text-row.component.html',
  styleUrls: ['./text-row.component.css']
})
export class TextRowComponent implements OnInit {

  @Input() public row: TextRow;

  constructor() { }

  ngOnInit() {
  }

}
