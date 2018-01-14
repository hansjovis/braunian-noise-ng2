
/**
 *  A blog article category.
 */
export class ArticleCategory {
  
  constructor(
    public id?: string,
    public icon?: string, // As Font Awesome icon class.
    public title?: string,
    public description?: string,
    public active?: boolean,
  ){ }

  clone(): ArticleCategory {
    return new ArticleCategory(this.id, this.icon, 
      this.title, this.description, this.active);
  }

}