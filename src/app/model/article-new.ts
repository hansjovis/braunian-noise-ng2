
import { ArticleRow } from './article-row';

/**
 *  A blog article.
 */
export class Article {

  /**
   * Makes a new article
   * @param {string} _id
   * @param {string} img_ref the header image, as a URL.
   * @param {string} img_caption the caption of the header image.
   * @param {string} title 
   * @param {string} author 
   * @param {number} date in milliseconds
   * @param {string} categories 
   * @param {ArticleRow[]} rows the content of the article
   */
  constructor(
    public _id?: string,
    public img_ref?: string,
    public img_caption?: string,
    public title?: string,
    public description?: string,
    public author?: string,
    public date?: number,
    public categories?: string[],
    public rows?: ArticleRow[]
  ){ }

  /**
   * Clones this article.
   * @returns {Article} a clone of this article
   */
  public clone(): Article {
    return new Article(this._id, this.img_ref, this.img_caption,
      this.title, this.description, this.author,
      this.date, this.categories, this.rows);
  }
}