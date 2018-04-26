
import { ArticleRow } from '../article-row';

export class TextRow extends ArticleRow {

  public rowType = "TEXT";
  /** Raw text, in markdown.  */
  public textRaw: string;
  /** HTML-rendered markdown of the text. */
  public text: string;

  constructor() {
    super();
  }

  /**
   * Sets the text of this row, written in markdown.
   * Text gets automatically generated to html.
   * @param text the new text, written in markdown.
   */
  public setText(text: string) {
    this.textRaw = text;
  }
  
} 

