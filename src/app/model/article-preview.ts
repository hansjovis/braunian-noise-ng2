
import { ImageRow } from './article-rows/image-row';

/**
 *  A blog article.
 */
export class ArticlePreview {

  /**
   * Makes a new article
   * @param {string} _id
   * @param {ImageRow} header_img
   * @param {string} title 
   * @param {string} description 
   * @param {string} author 
   * @param {number} date in milliseconds
   * @param {string} categories 
   */
  constructor(
    public _id?: string,
    public header_img?: ImageRow,
    public title?: string,
    public description?: string,
    public author?: string,
    public date?: number,
    public categories?: string[],
  ){ }

  /**
   * Clones this article.
   * @returns {ArticlePreview} a clone of this article
   */
  public clone(): ArticlePreview {
    return new ArticlePreview(this._id, this.header_img,
      this.title, this.description, this.author,
      this.date, this.categories);
  }
}