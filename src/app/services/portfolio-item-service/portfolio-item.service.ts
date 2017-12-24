import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { PortfolioItemPreview } from '../../model/portfolio-item-preview';
import { MOCK_PORTFOLIO_ITEM_PREVIEWS } from '../mock-portfolio-item-previews'

@Injectable()
export class PortfolioItemService {

  constructor() { }

  getPreviews(): Observable<PortfolioItemPreview[]> {
    return of(MOCK_PORTFOLIO_ITEM_PREVIEWS );
  }
  
}
