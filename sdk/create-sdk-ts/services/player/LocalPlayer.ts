import * as pc from 'playcanvas';
import {ILocalPlayer, ILocalPlayerEvents} from './interface/ILocalPlayer';
import Player from './Player';

class LocalPlayer extends Player implements ILocalPlayer {
  canMove = true;
  canJump = true;
  canRun = true;
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

  get canFly(): boolean {
    return true;
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

  playAnimation(
    stateName: string,
    asset: pc.Asset,
    options?: {loop: boolean; lock: boolean}
  ): void {}

  stopAnimation(): void {}

  respawn(timeout?: number): void {}

  teleport(destination: pc.Vec3, rotationY?: number): void {}

  changeAvatar(asset: pc.Asset): void {}

  resetToViverseAvatar(): void {}

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
