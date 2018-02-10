
/**
 *  A preview of an item in the portfolio.
 */
export class PortfolioItemPreview {

  /**
   * 
   * @param {string} _id 
   * @param {string} img_ref the header image, as a URL.
   * @param {string} title 
   * @param {string} author 
   * @param {number} date in milliseconds
   */
  constructor(
    public _id: string,
    public img_ref: string,
    public title: string,
    public author: string,
    public date: number,
  ){ }

  /**
   * Clones this preview.
   * @returns {Article} a clone of this preview.
   */
  public clone(): PortfolioItemPreview {
    return new PortfolioItemPreview(this._id, 
      this.img_ref, this.title, this.author, this.date);
  }
}