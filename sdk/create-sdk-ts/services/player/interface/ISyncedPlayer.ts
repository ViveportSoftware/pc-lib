import {IPlayer} from './IPlayer';

/**
 * 定義 SyncedPlayer 介面
 */
export interface ISyncedPlayer extends IPlayer {
  /**
   * 是否為 admin
   */
  readonly isAdmin: boolean;

  /**
   * 是否為 owner
   */
  readonly isOwner: boolean;

  /**
   * 是否正在說話
   */
  readonly isTalking: boolean;
}
