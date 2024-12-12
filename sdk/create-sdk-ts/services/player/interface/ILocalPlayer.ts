import {IPlayer, IPlayerEvents} from './IPlayer';
import * as MoveTypes from '../enums/move';

/**
 * Define LocalPlayer interface.
 */
export interface ILocalPlayer extends IPlayer {
  /**
   * @beta Whether the player can move.
   */
  canMove: boolean;

  /**
   * @beta Whether the player can jump.
   */
  canJump: boolean;

  /**
   * @beta Whether the player can run.
   */
  canRun: boolean;

  /**
   * @beta Player's respawn point, default is null.<br>
   * When executing respawn(), first using respawnPosition as the respawn location.<br>
   * If respawnPosition is null, the respawn location will be determined by the original VIVERSE CREATE mechanism (checkpoint, spawn-point tag).
   */
  respawnPosition: pc.Vec3 | null;

  /**
   * Fall speed multiplier<br>
   * Use this parameter to enhance the feeling of gravity effect when falling.<br>
   * For example, when the character starts to fall after jumping, gravity will increase with this multiplier, causing the character to reach the ground faster.
   */
  fallingGravityMultiplier: number;

  /**
   * The gravity multiplier that affects both ascent and descent.
   */
  gravityMultiplier: number;

  /**
   * Flight speed multiplier.
   */
  flySpeedMultiplier: number;

  /**
   * Running speed multiplier.
   */
  runSpeedMultiplier: number;

  /**
   * Walking speed multiplier.
   */
  walkSpeedMultiplier: number;

  /**
   * @beta Jump height multiplier.
   */
  jumpMultiplier: number;

  /**
   * Whether the character can be seen by remote players.
   */
  isVisibleRemotely: boolean;

  /**
   * Whether the player can fly.
   */
  readonly canFly: boolean;

  /**
   * Get the character's current speed.
   */
  readonly velocity?: pc.Vec3;

  /**
   * @beta Get the player's respawn count.
   */
  readonly spawnCount: number;

  /**
   * @beta Make the character jump in place. If successful, it will trigger the jump:start event.<br>
   * In some cases, the character may not be able to jump, such as when the character is falling, is already in a jumping state, or is affected by external forces.
   */
  jump(): void;

  /**
   * @beta Play a custom animation.
   * @param {string} stateName - The stateName of animation.
   * @param {pc.Asset} asset - Send the vram file.
   * @param {Object} [options] - Optional parameters.
   * @param {boolean} [options.loop=false] - Loop the animation. Default is false.
   * @param {boolean} [options.lock=false] - Lock the animation. Default is false.
   */
  playAnimation(
    stateName: string,
    asset: pc.Asset,
    options?: {loop: boolean; lock: boolean}
  ): void;

  /**
   * @beta Stop all currently playing animations.
   * @returns {void}
   */
  stopAnimation(): void;

  /**
   * @beta Send the character back to the respawn point (respawnPosition), with the respawned event triggered.<br>
   * If respawnPosition is null, the respawn location will be determined by the original VIVERSE CREATE mechanism (checkpoint, spawn-point tag).
   * @param {number} [timeout] - Delay the respawn time (in milliseconds).
   */
  respawn(timeout?: number): void;

  /**
   * @beta Teleport the character to the target location.
   * @param {pc.Vec3} destination - Target location
   * @param {number} [rotationY] - Y-axis rotation angle
   */
  teleport(destination: pc.Vec3, rotationY?: number): void;

  /**
   * @beta Change the avatar model.
   * @param {pc.Asset} asset - Avatar model asset.
   */
  changeAvatar(asset: pc.Asset): void;

  /**
   * Reset the avatar model to the default VIVERSE CREATE avatar model.
   */
  resetToViverseAvatar(): void;

  /**
   * Subscribe to a specific event.
   * @param event - Event name
   * @param listener - Callback function
   */
  on<T extends keyof ILocalPlayerEvents>(
    event: T,
    listener: ILocalPlayerEvents[T]
  ): pc.EventHandle;

  /**
   * Unsubscribe from a specific event.
   * @param event - Event name
   * @param listener - Callback function
   */
  off<T extends keyof ILocalPlayerEvents>(
    event: T,
    listener: ILocalPlayerEvents[T]
  ): pc.EventHandler;
}

/**
 * Define events supported by ILocalPlayer and their corresponding parameters.
 */
export interface ILocalPlayerEvents extends IPlayerEvents {
  /**
   * @beta Triggered when the player's initialization is complete.
   * @param entity - Player's entity
   */
  'player:ready': (entity: pc.Entity) => void;

  /**
   * Triggered when the player's avatar starts moving.
   */
  'move:start': () => void;

  /**
   * Triggered when the player's avatar stops moving.
   */
  'move:end': () => void;

  /**
   * Triggered when the player's avatar starts running.
   */
  'run:start': () => void;

  /**
   * Triggered when the player's avatar stops running.
   */
  'run:end': () => void;

  /**
   * Triggered when the player's avatar starts flying.
   */
  'fly:start': () => void;

  /**
   * Triggered when the player's avatar stops flying.
   */
  'fly:end': () => void;

  /**
   * @beta Triggered when the player's avatar jumps.
   */
  'jump:start': () => void;

  /**
   * @beta Triggered when the player's avatar lands.
   */
  'jump:end': () => void;

  /**
   * Triggered when the player's avatar lands in the scene, and returns the current coordinates.
   * @param position - Current coordinates.
   */
  landed: (position: pc.Vec3) => void;

  /**
   * Triggered when the player's avatar is in an infinite fall state, typically used to check if the character is no longer in the scene.
   */
  infiniteFalling: () => void;

  /**
   * @beta Triggered when the player's avatar respawns, and returns the respawn point coordinates.
   * @param position - Respawn point coordinates.
   */
  respawned: (position: pc.Vec3) => void;

  /**
   * 當 Player 的 avatar 在 XR teleport時觸發
   */
  'xr:teleport': () => void;

   /**
   * 當 Player 的 avatar 在 XR turning時觸發
   */
  'xr:turning': () => void;

  /**
   * 當 Player 的 avatar 水平移動狀態改變時觸發
   * @param nextState - 下一個移動狀態
   * @param prevState - 上一個移動狀態
   */
  'move:horizontal': (nextState: MoveTypes.HorizontalTypes, prevState: MoveTypes.HorizontalTypes) => void;

   /**
   * 當 Player 的 avatar 垂直移動狀態改變時觸發
   * @param nextState - 下一個移動狀態
   * @param prevState - 上一個移動狀態
   */
  'move:vertical': (nextState: MoveTypes.VerticalTypes, prevState: MoveTypes.VerticalTypes) => void;
}
