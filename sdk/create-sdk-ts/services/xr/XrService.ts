import * as pc from 'playcanvas';
import {IXrService, IXrServiceEvents} from './interface/IXrService';
import {IXrController} from './interface/IXrController';

class XrService implements IXrService {
  constructor() {}

  get input(): pc.XrInput | undefined {
    return undefined;
  }

  get constrollers(): {left?: IXrController; right?: IXrController} {
    return {left: undefined, right: undefined};
  }

  on<T extends keyof IXrServiceEvents>(
    event: T,
    listener: IXrServiceEvents[T]
  ): pc.EventHandle {
    return {} as pc.EventHandle;
  }

  off<T extends keyof IXrServiceEvents>(
    event: T,
    listener: IXrServiceEvents[T]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }

  fire<T extends keyof IXrServiceEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }
}

export default XrService;
