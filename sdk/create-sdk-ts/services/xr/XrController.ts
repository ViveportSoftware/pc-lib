import * as pc from 'playcanvas';
import {IXrController, IXrControllerEvents} from './interface/IXrController';
import XrHandControllerBase from './XrHandControllerBase';

class XrController extends XrHandControllerBase implements IXrController {
  constructor() {
    super();
  }

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
