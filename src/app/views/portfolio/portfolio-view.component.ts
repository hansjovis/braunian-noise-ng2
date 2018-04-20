import { Component, OnInit } from '@angular/core';

import { PortfolioItemService } from '../../services/portfolio-item-service/portfolio-item.service';
import { PortfolioItemPreview } from '../../model/portfolio-item-preview'

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.css']
})
export class PortfolioViewComponent implements OnInit {

  previews: PortfolioItemPreview[] ;
  /** As an portfolio item ID. */
  itemInfocus: string ;  

  /**
   * Makes a new portfolio item view.
   * @param portfolioItemService provides CRUD-methods on portfolio items.
   */
  constructor(private portfolioItemService: PortfolioItemService) { }

  ngOnInit() {
    this.getPreviews();
  }
  
  /**
   * Focuses the view on a specific portfolio item.
   * E.g. to show its title.
   * @param {string} id (optional) the id of the portfolio item that should be in focus (focuses none if not set).
   */
  public setFocus(id?: string) {
    this.itemInfocus = id;
  }
  
  /**
   * Retrieves a list of all portfolio item previews and injects it into the template.
   */
  private getPreviews() {
    this.portfolioItemService.getPreviews()
        .subscribe(previews => this.previews = previews);
  }

}
