import { Component, OnInit } from '@angular/core';

import { PortfolioItemService } from '../portfolio-item.service';
import { PortfolioItemPreview } from '../portfolio-item-preview'

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.css']
})
export class PortfolioViewComponent implements OnInit {

  previews: PortfolioItemPreview[] ;
  /** As an item ID. */
  previewHoveredOver: string ;  

  constructor(private portfolioItemService: PortfolioItemService) { }

  ngOnInit() {
    this.getPreviews();
  }
  
  setPreviewHoveredOver(id: string) {
    this.previewHoveredOver = id;
  }
  
  getPreviews() {
    this.portfolioItemService.getPreviews()
        .subscribe(previews => this.previews = previews);
  }

}
