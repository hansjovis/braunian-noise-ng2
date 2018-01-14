
/**
 *  A preview of an item in the portfolio.
 */
export class PortfolioItemPreview {

  constructor(
    public id: string,
    public img_ref: string,
    public title: string,
    public author: string,
    public date: number,
  ){ }

  clone(): PortfolioItemPreview {
    return new PortfolioItemPreview(this.id, 
      this.img_ref, this.title, this.author, this.date);
  }
}