import {IPlayer} from './IPlayer';

/**
 * Define RemotePlayer interface.
 */
export interface IRemotePlayer extends IPlayer {
  /**
   * @private
   * @planned Whether the player is admin.
   */
  readonly isAdmin: boolean;

  /**
   * @private
   * @planned Whether the player is owner.
   */
  readonly isOwner: boolean;

  /**
   * @private
   * @planned Whether the player is talking.
   */
  readonly isTalking: boolean;
}
