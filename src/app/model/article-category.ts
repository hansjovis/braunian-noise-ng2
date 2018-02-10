
/**
 *  A blog article category.
 */
export class ArticleCategory {
  
  /**
   * Generates a new category.
   * @param _id (optional) 
   * @param icon (optional) 
   * @param title (optional)
   * @param description (optional)
   * @param active (optional) whether this category should be shown or not.
   */
  constructor(
    public _id?: string,
    public icon?: string, // As Font Awesome icon class.
    public title?: string,
    public description?: string,
    public active?: boolean,
  ){ }

  /**
   * Clones this category.
   * @return {ArticleCategory} a clone of this category.
   */
  clone(): ArticleCategory {
    return new ArticleCategory(this._id, this.icon, 
      this.title, this.description, this.active);
  }

}