import {ILocalPlayer} from './ILocalPlayer';
import {IRemotePlayer} from './IRemotePlayer';
import {EventHandlerMethods} from '../../../types';

/**
 * Define PlayerService interface.
 */
export interface IPlayerService extends EventHandlerMethods {
  /**
   * @planned Get local player information.
   */
  readonly localPlayer: ILocalPlayer | null;

  /**
   * @planned Get the information of all remote players in the room.
   */
  readonly remotePlayers: IRemotePlayer[];

  /**
   * @planned Get the number of players currently connected in the room.
   */
  readonly playerCount: number;

  /**
   * @inProgress Retrieve player information using Network ID.
   * @param id - Player's Network ID.
   * @returns {ILocalPlayer | IRemotePlayer | null}
   */
  getPlayerById(id: string): ILocalPlayer | IRemotePlayer | null;

  /**
   * @inProgress Retrieve player information using Entity.
   * @param entity - Player's Entity.
   * @returns {ILocalPlayer | IRemotePlayer | null}
   */
  getPlayerByEntity(entity: pc.Entity): ILocalPlayer | IRemotePlayer | null;

  /**
   * @inProgress Check if the Entity is the LocalPlayer.
   * @param entity - Entity
   * @returns {boolean}
   */
  checkIsLocalPlayerEntity(entity: pc.Entity): boolean;

  /**
   * @inProgress Check if the Entity is the RemotePlayer.
   * @param entity - Entity
   * @returns {boolean}
   */
  checkIsRemotePlayerEntity(entity: pc.Entity): boolean;

  /**
   * Subscribe to a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  on<T extends keyof IPlayerServiceEvents>(
    event: T,
    listener: IPlayerServiceEvents[T]
  ): pc.EventHandle;

  /**
   * Unsubscribe from a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  off<T extends keyof IPlayerServiceEvents>(
    event: T,
    listener: IPlayerServiceEvents[T]
  ): pc.EventHandler;
}

export interface IPlayerServiceEvents {
  /**
   * @inProgress Trigger when a remote player joins the session.
   * @param remotePlayer - An instance of the remote player, it's an object of type 'IRemotePlayer', containing player-related information.
   */
  'remotePlayer:joined': (remotePlayer: IRemotePlayer) => void;

  /**
   * @inProgress Trigger when a remote player leaves the session.
   * @param remotePlayer - An instance of the remote player, it's an object of type 'IRemotePlayer', containing player-related information.
   */
  'remotePlayer:left': (remotePlayer: IRemotePlayer) => void;
}
