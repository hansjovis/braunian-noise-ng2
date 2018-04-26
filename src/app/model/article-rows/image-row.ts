
import { ArticleRow } from '../article-row';

export class ImageRow extends ArticleRow {

  public rowType = "IMAGE";
  public src: string;
  public fileName: string;
  public caption: string;

  constructor() {
    super();
  }

} 