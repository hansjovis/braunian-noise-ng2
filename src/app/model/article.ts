import { debounce } from "rxjs/operators/debounce";


/**
 *  A blog article.
 */
export class Article {

  constructor(
    public id?: string,
    public img_ref?: string,
    public title?: string,
    public description?: string,
    public author?: string,
    public date?: number, // In milliseconds.
    public categories?: string[],
  ){ }

  clone(): Article {
    return new Article(this.id, this.img_ref,
      this.title, this.description, this.author,
      this.date, this.categories);
  }
}