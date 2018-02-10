
/**
 *  A user (e.g. admin).
 */
export class User {

  constructor(
    public _id: string,
    public username: string,
    public screenname: string
  ){ }

  /**
   * Clones this preview.
   * @returns {Article} a clone of this preview.
   */
  public clone(): User {
    return new User(this._id, this.username, this.screenname);
  }
}