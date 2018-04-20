
import { ArticleRow } from './article-row';
import { ImageRow } from './article-rows/image-row';
import { ArticleCategory } from './article-category';

/**
 *  A blog article.
 */
export class Article {

  /**
   * Makes a new article
   * @param {string} _id
   * @param {ImageRow} header_img
   * @param {string} title 
   * @param {string} author 
   * @param {number} date in milliseconds
   * @param {ArticleCategory[]} categories 
   * @param {ArticleRow[]} rows the content of the article
   */
  constructor(
    public _id?: string,
    public header_img?: ImageRow,
    public title?: string,
    public description?: string,
    public author?: string,
    public date?: number,
    public categories?: ArticleCategory[],
    public rows?: ArticleRow[]
  ){ }

  /**
   * Clones this article.
   * @returns {Article} a clone of this article
   */
  public clone(): Article {
    return new Article(this._id, this.header_img,
      this.title, this.description, this.author,
      this.date, this.categories, this.rows);
  }
}