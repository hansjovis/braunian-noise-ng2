import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { ImageRow } from '../../../../../../model/article-rows/image-row';

@Component({
  selector: 'app-image-row',
  templateUrl: './image-row.component.html',
  styleUrls: ['./image-row.component.css']
})
export class ImageRowComponent implements OnInit {


  @Input() public row: ImageRow;
  @ViewChild('imageUpload') public imageUpload: any;

  constructor() { }

  ngOnInit() {
    this.row.src = "../../../../assets/articles/mock/placeholder-image600x300.jpg";
  }

  /**
   * Triggers the upload of the header image.
   * (Showing a file upload dialog)
   */
  triggerUploadImage(): void {
    this.imageUpload.nativeElement.click();
  }

  onImageUpload(event): void {
    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.row.src = e.target.result;
    };

    let file = event.target.files[0];

    this.row.fileName = file.name;
    reader.readAsDataURL(file);
  }

}
