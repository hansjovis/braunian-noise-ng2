import { debounce } from "rxjs/operators/debounce";


/**
 *  A blog article.
 */
export class Article {

  /**
   * Makes a new article
   * @param {string} _id
   * @param {string} img_ref the header image, as a URL.
   * @param {string} title 
   * @param {string} description 
   * @param {string} author 
   * @param {number} date in milliseconds
   * @param {string} categories 
   */
  constructor(
    public _id?: string,
    public img_ref?: string,
    public title?: string,
    public description?: string,
    public author?: string,
    public date?: number,
    public categories?: string[],
  ){ }

  /**
   * Clones this article.
   * @returns {Article} a clone of this article
   */
  public clone(): Article {
    return new Article(this._id, this.img_ref,
      this.title, this.description, this.author,
      this.date, this.categories);
  }
}