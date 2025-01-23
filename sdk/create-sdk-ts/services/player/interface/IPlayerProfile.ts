/**
 * Define PlayerProfile interface.
 */
export interface IPlayerProfile {
  /**
   * @planned Player's display name.
   */
  displayName: string;
  /**
   * @planned Player's avatar snapshot.
   */
  snapshot: {
    /**
     * @planned Player's avatar headshot.
     */
    head: string;
    /**
     * @planned Player's avatar full-body picture.
     */
    fullBody: string;
  };
  /**
   * @planned Player's user ID.
   */
  userId: string;
  /**
   * @planned Player's user name.
   */
  userName: string;
}
