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
   * @private
   * @planned Whether the player is visible on the local client.
   */
  isVisible: boolean;

  /**
   * @private
   * @planned Get the status that whether the Player has disconnected from the server.
   */
  readonly isDisposed: boolean;

  /**
   * Player's collision, default collision type is capsule.
   */
  readonly collision: pc.CollisionComponent | null;

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
   * @param result - Contains details of the contact between the player and the other rigid body.
   */
  collisionstart: (result: pc.ContactResult) => void;
  /**
   * @planned Triggered when the player stops touching another rigid body.
   * @param other - The rigid body entity that the player is no longer in contact with.
   */
  collisionend: (other: pc.Entity) => void;
  /**
   * @planned Triggered while the player is touching another rigid body.
   * @param result - Contains details of the contact between the player and the other rigid body.
   */
  contact: (result: pc.ContactResult) => void;
}
