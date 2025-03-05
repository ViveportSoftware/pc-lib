import * as pc from 'playcanvas';
import {IXrController, IXrControllerEvents} from './interface/IXrController';

class XrController implements IXrController {
  constructor() {}

  get modelEntity(): pc.Entity | null {
    return null;
  }

  get inputSource(): pc.XrInputSource | null {
    return null;
  }

  get handedness(): typeof pc.XRHAND_LEFT | typeof pc.XRHAND_RIGHT {
    return 'left';
  }

  setModelAsset(
    asset: pc.Asset,
    options?: {
      castShadows?: boolean;
      receiveShadows?: boolean;
      onCompleted?: (entity: pc.Entity) => void;
    }
  ): void {}

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

export default XrController;
