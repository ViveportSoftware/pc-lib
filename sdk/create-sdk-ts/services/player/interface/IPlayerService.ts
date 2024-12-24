import {ILocalPlayer} from './ILocalPlayer';
import {IRemotePlayer} from './IRemotePlayer';

/**
 * Define PlayerService interface.
 */
export interface IPlayerService {
  /**
   * Get local player information.
   */
  readonly localPlayer: ILocalPlayer | null;

  /**
   * Get the information of all remote players in the room.
   */
  readonly remotePlayers: IRemotePlayer[];

  /**
   * Get the number of players currently connected in the room.
   */
  readonly playerCount: number;
}
