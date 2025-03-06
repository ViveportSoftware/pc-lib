import * as pc from 'playcanvas';
import {ILocalPlayer, ILocalPlayerEvents} from './interface/ILocalPlayer';
import Player from './Player';

class LocalPlayer extends Player implements ILocalPlayer {
  canMove = true;
  canJump = true;
  canHardLanding = true;
  canRun = true;
  canFly = undefined;
  respawnPosition: pc.Vec3 | null = null;
  fallingGravityMultiplier = 1;
  gravityMultiplier = 1;
  flySpeedMultiplier = 1;
  runSpeedMultiplier = 1;
  walkSpeedMultiplier = 1;
  jumpMultiplier = 1;
  isVisibleRemotely = true;

  constructor() {
    super();
  }

  /**
   * @type {pc.Vec3 | undefined}
   */
  get velocity(): pc.Vec3 | undefined {
    return undefined;
  }

  get spawnCount(): number {
    return 0;
  }

  jump(): void {}

  async playAnimation(
    stateName: string,
    options?: {loop: boolean; lock: boolean; asset?: pc.Asset} | pc.Asset,
    legacyOptions?: {loop: boolean; lock: boolean}
  ): Promise<pc.Asset | null> {
    return null;
  }

  stopAnimation(): void {}

  respawn(timeout?: number): void {}

  teleport(destination: pc.Vec3, rotationY?: number): void {}

  changeAvatar(asset: pc.Asset): void {}

  resetToViverseAvatar(): void {}

  turnToward(x: number | pc.Vec2, y?: number): void {}

  scaleAvatar(
    scale: number,
    options?: {
      sync?: boolean;
    }
  ): void {}

  on<T extends keyof ILocalPlayerEvents>(
    event: T,
    listener: ILocalPlayerEvents[T]
  ): pc.EventHandle {
    return {} as pc.EventHandle;
  }

  off<T extends keyof ILocalPlayerEvents>(
    event: T,
    listener: ILocalPlayerEvents[T]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }

  fire<T extends keyof ILocalPlayerEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }
}

export default LocalPlayer;
