import {IPlayer, IPlayerEvents} from './IPlayer';
import * as MoveTypes from '../enums/move';

/**
 * Define LocalPlayer interface.
 */
export interface ILocalPlayer extends IPlayer {
  /**
   * Whether the player can move.
   */
  canMove: boolean;

  /**
   * Whether the player can run.
   */
  canRun: boolean;

  /**
   * Whether the player can jump.
   */
  canJump: boolean;

  /**
   * Whenther the player can fly.
   */
  canFly: boolean | undefined;

  /**
   * Whenther the player can hard land.
   */
  canHardLanding: boolean;

  /**
   * Player's respawn point, default is null.<br>
   * When executing respawn(), first using respawnPosition as the respawn location.<br>
   * If respawnPosition is null, the respawn location will be determined by the original VIVERSE CREATE mechanism (checkpoint, spawn-point tag).
   */
  respawnPosition: pc.Vec3 | null;

  /**
   * @planned Fall speed multiplier<br>
   * Use this parameter to enhance the feeling of gravity effect when falling.<br>
   * For example, when the character starts to fall after jumping, gravity will increase with this multiplier, causing the character to reach the ground faster.
   */
  fallingGravityMultiplier: number;

  /**
   * @planned The gravity multiplier that affects both ascent and descent.
   */
  gravityMultiplier: number;

  /**
   * @planned Flight speed multiplier.
   */
  flySpeedMultiplier: number;

  /**
   * @planned Running speed multiplier.
   */
  runSpeedMultiplier: number;

  /**
   * @planned Walking speed multiplier.
   */
  walkSpeedMultiplier: number;

  /**
   * Jump height multiplier.
   */
  jumpMultiplier: number;

  /**
   * @planned Whether the character can be seen by remote players.
   */
  isVisibleRemotely: boolean;

  /**
   * @planned Get the character's current speed.
   */
  readonly velocity?: pc.Vec3;

  /**
   * Get the player's respawn count.
   */
  readonly spawnCount: number;

  /**
   * Make the character jump in place. If successful, it will trigger the jump:start event.<br>
   * In some cases, the character may not be able to jump, such as when the character is falling, is already in a jumping state, or is affected by external forces.
   */
  jump(): void;

  /**
   * Play a custom animation.
   * @param {string} stateName - The stateName of animation.
   * @param {Object} [options] - Optional parameters.
   * @param {boolean} [options.loop=false] - Loop the animation. Default is false.
   * @param {boolean} [options.lock=false] - Lock the animation. Default is false.
   * @param {pc.Asset} [options.asset] - Send the vrma file.
   * @returns {Promise<pc.Asset|null>} - Return the animation asset.
   */
  playAnimation(
    stateName: string,
    options?: {loop: boolean; lock: boolean; asset?: pc.Asset}
  ): Promise<pc.Asset | null>;

  /**
   * @internal
   * Overload ensures typeDoc only shows `options` as object.
   * The `pc.Asset` variant is hidden but remains valid in TypeScript.
   */
  playAnimation(
    stateName: string,
    options?: {loop: boolean; lock: boolean; asset?: pc.Asset} | pc.Asset,
    legacyOptions?: {loop: boolean; lock: boolean}
  ): Promise<pc.Asset | null>;

  /**
   * Stop all currently playing animations.
   * @returns {void}
   */
  stopAnimation(): void;

  /**
   * Send the character back to the respawn point (respawnPosition), with the respawned event triggered.<br>
   * If respawnPosition is null, the respawn location will be determined by the original VIVERSE CREATE mechanism (checkpoint, spawn-point tag).
   * @param {number} [timeout] - Delay the respawn time (in milliseconds).
   */
  respawn(timeout?: number): void;

  /**
   * Teleport the character to the target location.
   * @param {pc.Vec3} destination - Target location
   * @param {number} [rotationY] - Y-axis rotation angle
   */
  teleport(destination: pc.Vec3, rotationY?: number): void;

  /**
   * Change the avatar model.
   * @param {pc.Asset} asset - Avatar model asset.
   */
  changeAvatar(asset: pc.Asset): void;

  /**
   * Reset the avatar model to the default VIVERSE avatar model.
   */
  resetToViverseAvatar(): void;

  /**
   * Make the character face the target’s position on the horizontal plane.
   * @param {number | pc.Vec2} x - X-coordinate of the target’s position on the horizontal plane, or the target's horizontal position.
   * @param {number} [y] - Y-coordinate of the target’s position on the horizontal plane.
   */
  turnToward(x: number | pc.Vec2, y?: number): void;

  /**
   * @planned Scale the avatar model with the specified scale ratio.
   * @param {number} scale - Scale ratio
   * @param {Object} [options] - Optional parameters
   * @param {boolean} [options.sync=true] - Whether to sync scaling to other players over the network. Default is true.
   */
  scaleAvatar(
    scale: number,
    options?: {
      sync?: boolean;
    }
  ): void;

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
   * Triggered when the player's initialization is complete.
   * @param entity - Player's entity
   */
  'player:ready': (entity: pc.Entity) => void;

  /**
   * Triggered when the player's avatar jumps.
   */
  'jump:start': () => void;

  /**
   * Triggered when the player's avatar lands.
   */
  'jump:end': () => void;

  /**
   * @planned Triggered when the player's avatar lands in the scene, and returns the current coordinates.
   * @param position - Current coordinates.
   */
  landed: (position: pc.Vec3) => void;

  /**
   * @planned Triggered when the player's avatar is in an infinite fall state, typically used to check if the character is no longer in the scene.
   */
  infiniteFalling: () => void;

  /**
   * Triggered when the player's avatar respawns, and returns the respawn point coordinates.
   * @param position - Respawn point coordinates.
   */
  respawned: (position: pc.Vec3) => void;

  /**
   * Trigger when the player’s avatar is in XR teleportation.
   */
  'xr:teleport': () => void;

  /**
   * Trigger when the player’s avatar is in XR turning.
   */
  'xr:turning': () => void;

  /**
   * Trigger when the player’s avatar horizontal movement state changes.
   * @param currentState - Current movement state.
   * @param prevState - Previous movement state.
   */
  'move:horizontal': (
    currentState: MoveTypes.HorizontalTypes,
    prevState: MoveTypes.HorizontalTypes
  ) => void;

  /**
   * Trigger when the player’s avatar vertical movement state changes.
   * @param currentState - Current movement state.
   * @param prevState - Previous movement state.
   */
  'move:vertical': (
    currentState: MoveTypes.VerticalTypes,
    prevState: MoveTypes.VerticalTypes
  ) => void;
}
