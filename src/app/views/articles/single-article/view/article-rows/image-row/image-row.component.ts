import { Component, OnInit, Input } from '@angular/core';
import { ImageRow } from '../../../../../../model/article-rows/image-row';

@Component({
  selector: 'app-image-row',
  templateUrl: './image-row.component.html',
  styleUrls: ['./image-row.component.css']
})
export class ImageRowComponent implements OnInit {

  @Input() public row: ImageRow;

  constructor() { }

  ngOnInit() {
  }

}
