import { v4 as uuid } from 'uuid';

/**
 * A content row in an article, e.g. text, header, image, code...
 * (See subclasses).
 */
export class ArticleRow {

  public _id: String;

  constructor() {
    this._id = uuid();
  }

}