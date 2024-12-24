/**
 * Define PlayerProfile interface.
 */
export interface IPlayerProfile {
  /**
   * Player's display name.
   */
  displayName: string;
  /**
   * Player's avatar snapshot.
   */
  snapshot: {
    /**
     * Player's avatar headshot.
     */
    head: string;
    /**
     * Player's avatar full-body picture.
     */
    fullBody: string;
  };
  /**
   * Player's user ID.
   */
  userID: string;
  /**
   * Player's user name.
   */
  userName: string;
}
