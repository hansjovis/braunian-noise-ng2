import { Component, OnInit } from '@angular/core';

import { PortfolioItemService } from '../portfolio-item.service';
import { PortfolioItemPreview } from '../portfolio-item-preview'

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.css']
})
export class PortfolioViewComponent implements OnInit {

  previews: PortfolioItemPreview[];

  constructor(private portfolioItemService: PortfolioItemService) { }

  ngOnInit() {
    this.getPreviews();
  }
  
  getPreviews() {
    this.portfolioItemService.getPreviews()
        .subscribe(previews => this.previews = previews);
  }

}
