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
   * Whether the player is visible on the local client.
   */
  isVisible: boolean;

  /**
   * Get the display name of player's character.
   */
  readonly displayName: string;

  /**
   * Get the status that whether the Player has disconnected from the server.
   */
  readonly isDisposed: boolean;

  /**
   * Get the player's avatar information.
   */
  readonly avatar?: IAvatar;

  /**
   * Get the player's server connection information.
   */
  readonly network?: INetwork;

  /**
   * Get the player's name tag.
   */
  readonly nameTag?: INameTag;

  /**
   * Get the player's profile information.
   */
  readonly profile?: IPlayerProfile;

  /**
   * Get the player entity.
   */
  readonly entity?: pc.Entity;

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
   * Triggered when the player's avatar collider collides with another collider.
   * @param entity - Current coordinate.
   */
  colliderHit: (event: pc.ContactResult) => void;
}
