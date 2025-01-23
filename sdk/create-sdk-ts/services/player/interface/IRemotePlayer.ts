import {IPlayer} from './IPlayer';

/**
 * Define RemotePlayer interface.
 */
export interface IRemotePlayer extends IPlayer {
  /**
   * @planned Whether the player is admin.
   */
  readonly isAdmin: boolean;

  /**
   * @planned Whether the player is owner.
   */
  readonly isOwner: boolean;

  /**
   * @planned Whether the player is talking.
   */
  readonly isTalking: boolean;
}
