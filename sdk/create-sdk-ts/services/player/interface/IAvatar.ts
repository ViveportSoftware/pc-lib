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
   * @planned Player avatar's BoundingBox.
   */
  boundingBox?: pc.BoundingBox;

  /**
   * @planned Player's collision, default collision type is capsule.
   */
  collision?: pc.CollisionComponent;

  /**
   * @planned Get player's avatar ID.
   */
  readonly avatarId: string;

  /**
   * @planned Get player's avatar model link.
   */
  readonly avatarGlb: string;

  /**
   * @planned Get player's avatar photo.
   */
  readonly snapshot?: IAvatarSnapshot;

  /**
   * @planned Get player's avatar gender, default: 0.
   */
  readonly gender: AvatarTypes.GenderTypes;

  /**
   * @planned Get player's avatar type.
   */
  readonly dataType: AvatarTypes.DataTypes;

  /**
   * Get player's avatar position, rotation, and size information.
   */
  readonly transform?: IAvatarTransform;

  /** 
   * Retrieve the Avatar's Bone Entity.
   * @param boneName - Bone name
   * {@link https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_vrm-1.0/humanoid.md | VRM Bone name}
   */
  getBone(boneName: string): pc.Entity | null;

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
 * Define events supported by IPlayer and their corresponding parameters.
 */
export interface IAvatarEvents {
  /**
   * Triggered when the player's avatar is rendered. If the avatar becomes an impostor, it is null.
   * @param entity - Current coordinates.
   */
  avatarExistsChanged: (entity: pc.Entity | null) => void;
}
