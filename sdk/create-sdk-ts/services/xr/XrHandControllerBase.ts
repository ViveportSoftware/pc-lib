import * as pc from 'playcanvas';
import * as XrTypes from './enums/xr';
import {IXrControllerEvents} from './interface/IXrController';
import {IXrHandControllerBase} from './interface/IXrHandControllerBase';

class XrHandControllerBase implements IXrHandControllerBase {
  constructor() {}

  get entity(): pc.Entity | null {
    return null;
  }

  get inputSource(): pc.XrInputSource | null {
    return null;
  }

  get handedness(): XrTypes.HandednessTypes {
    return XrTypes.HandednessTypes.Left;
  }

  async setModelAsset(asset?: pc.Asset): Promise<null> {
    return null;
  }

  resetModelAsset(): void {}

  on<T extends keyof IXrControllerEvents>(
    event: T,
    listener: IXrControllerEvents[T]
  ): pc.EventHandle {
    return {} as pc.EventHandle;
  }

  off<T extends keyof IXrControllerEvents>(
    event: T,
    listener: IXrControllerEvents[T]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }

  fire<T extends keyof IXrControllerEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }
}

export default XrHandControllerBase;
