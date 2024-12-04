import {IAvatar, IAvatarEvents} from './interface/IAvatar';
import * as AvatarTypes from './enums/avatar';
import AvatarSnapshot from './AvatarSnapshot';
import AvatarTransform from './AvatarTransform';

class Avatar implements IAvatar {
  boundingBox?: pc.BoundingBox;
  collision?: pc.CollisionComponent;

  constructor() {
    this.boundingBox = undefined;
    this.collision = undefined;
  }

  get avatarID(): string {
    return '';
  }

  get avatarGlb(): string {
    return '';
  }

  /**
   * @type {AvatarSnapshot | undefined}
   */
  get snapshot(): AvatarSnapshot | undefined {
    return undefined;
  }

  get gender(): AvatarTypes.GenderTypes {
    return AvatarTypes.GenderTypes.Female;
  }

  get dataType(): AvatarTypes.DataTypes {
    return AvatarTypes.DataTypes.VRM;
  }

  /**
   * @type {AvatarTransform | undefined}
   */
  get transform(): AvatarTransform | undefined {
    return undefined;
  }

  get entity(): pc.Entity | undefined {
    return undefined;
  }

  on<T extends keyof IAvatarEvents>(
    event: T,
    listener: IAvatarEvents[T]
  ): pc.EventHandle {
    return {} as pc.EventHandle;
  }

  off<T extends keyof IAvatarEvents>(
    event: T,
    listener: IAvatarEvents[T]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }

  fire<T extends keyof IAvatarEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }
}

export default Avatar;
