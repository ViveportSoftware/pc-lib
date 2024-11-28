/**
 * 定義 PlayerProfile 介面
 */
export interface IPlayerProfile {
  /**
   * Player 的暱稱
   */
  displayName: string;
  /**
   * Player 的 avatar 圖片
   */
  snapshot: {
    /**
     * Player 的 avatar 大頭照
     */
    head: string;
    /**
     * Player 的 avatar 全身照
     */
    fullBody: string;
  };
  /**
   * Player 的 ID
   */
  userID: string;
  /**
   * Player 的名稱
   */
  userName: string;
}
