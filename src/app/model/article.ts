
/**
 *  A blog article.
 */
export class Article {
  id: string;
  img_ref: string;
  title: string;
  description: string;
  author: string;
  date: number; // In milliseconds.
  categories: string[];
}