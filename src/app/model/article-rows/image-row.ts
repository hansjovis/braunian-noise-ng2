
import { ArticleRow } from '../article-row';

export class ImageRow extends ArticleRow {

  public type = "IMAGE";
  public src: string;
  public caption: string;

  constructor() {
    super();
  }

} 