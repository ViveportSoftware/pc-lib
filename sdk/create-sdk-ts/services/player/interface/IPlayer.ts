import * as pc from 'playcanvas';
import {EventHandlerMethods} from '../../../types';
import {IAvatar} from './IAvatar';
import {INetwork} from './INetwork';
import {INameTag} from './INameTag';
import {IPlayerProfile} from './IPlayerProfile';

/**
 * Define Player interface.
 */
export interface IPlayer extends EventHandlerMethods {
  /**
   * @planned Whether the player is visible on the local client.
   */
  isVisible: boolean;

  /**
   * @planned Get the display name of player's character.
   */
  readonly displayName: string;

  /**
   * @planned Get the status that whether the Player has disconnected from the server.
   */
  readonly isDisposed: boolean;

  /**
   * @planned Player's collision, default collision type is capsule.
   */
  readonly collision: pc.CollisionComponent | null;

  /**
   * @planned Get the player's avatar information.
   */
  readonly avatar?: IAvatar;

  /**
   * @planned Get the player's server connection information.
   */
  readonly network?: INetwork;

  /**
   * @planned Get the player's name tag.
   */
  readonly nameTag?: INameTag;

  /**
   * @planned Get the player's profile information.
   */
  readonly profile?: IPlayerProfile;

  /**
   * Subscribe to a specific event.
   * @param event - Event name
   * @param listener - Callback function
   */
  on<T extends keyof IPlayerEvents>(
    event: T,
    listener: IPlayerEvents[T]
  ): pc.EventHandle;

  /**
   * Unsubscribe from a specific event.
   * @param event - Event name
   * @param listener - Callback function
   */
  off<T extends keyof IPlayerEvents>(
    event: T,
    listener: IPlayerEvents[T]
  ): pc.EventHandler;

  /**
   * Send a specific event.
   * @param event - Event name
   * @param [args] - Event parameters
   */
  fire<T extends keyof IPlayerEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler;
}

/**
 * Define events supported by IPlayer and their corresponding parameters.
 */
export interface IPlayerEvents {
  /**
   * @planned Triggered when the player starts touching another rigid body.
   */
  collisionstart: (result: pc.ContactResult) => void;
  /**
   * @planned Triggered when the player stops touching another rigid body.
   */
  collisionend: (other: pc.Entity) => void;
  /**
   * @planned Triggered while the player is touching another rigid body.
   */
  contact: (result: pc.ContactResult) => void;
}
