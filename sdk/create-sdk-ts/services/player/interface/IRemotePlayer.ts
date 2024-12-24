import {IPlayer} from './IPlayer';

/**
 * Define RemotePlayer interface.
 */
export interface IRemotePlayer extends IPlayer {
  /**
   * Whether the player is admin.
   */
  readonly isAdmin: boolean;

  /**
   * Whether the player is owner.
   */
  readonly isOwner: boolean;

  /**
   * Whether the player is talking.
   */
  readonly isTalking: boolean;
}
