import * as pc from 'playcanvas';
import {EventHandlerMethods} from '../../../types';
import * as AvatarTypes from '../enums/avatar';
import {IAvatarSnapshot} from './IAvatarSnapshot';
import {IAvatarTransform} from './IAvatarTransform';

/**
 * Define Avatar interface.
 */
export interface IAvatar extends EventHandlerMethods {
  /**
   * Player avatar's BoundingBox.
   */
  boundingBox?: pc.BoundingBox;

  /**
   * Player's collision, default collision type is capsule.
   */
  collision?: pc.CollisionComponent;

  /**
   * Get player's avatar ID.
   */
  readonly avatarId: string;

  /**
   * Get player's avatar model link.
   */
  readonly avatarGlb: string;

  /**
   * Get player's avatar photo.
   */
  readonly snapshot?: IAvatarSnapshot;

  /**
   * Get player's avatar gender, default: 0.
   */
  readonly gender: AvatarTypes.GenderTypes;

  /**
   * Get player's avatar type.
   */
  readonly dataType: AvatarTypes.DataTypes;

  /**
   * @beta Get player's avatar position, rotation, and size information.
   */
  readonly transform?: IAvatarTransform;

  /**
   * Get player's avatar entity.
   */
  readonly entity?: pc.Entity;

  /**
   * Subscribe to a specific event.
   * @param event - Event name
   * @param listener - Callback function
   */
  on<T extends keyof IAvatarEvents>(
    event: T,
    listener: IAvatarEvents[T]
  ): pc.EventHandle;

  /**
   * Unsubscribe from a specific event.
   * @param event - Event name
   * @param listener - Callback function
   */
  off<T extends keyof IAvatarEvents>(
    event: T,
    listener: IAvatarEvents[T]
  ): pc.EventHandler;

  /**
   * Send a specific event.
   * @param event - Event name
   * @param [args] - Event parameters
   */
  fire<T extends keyof IAvatarEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler;
}

/**
 * @beta Define events supported by IPlayer and their corresponding parameters.
 */
export interface IAvatarEvents {
  /**
   * Triggered when the player's avatar is rendered. If the avatar becomes an impostor, it is null.
   * @param entity - Current coordinates.
   */
  avatarExistsChanged: (entity: pc.Entity | null) => void;
}
