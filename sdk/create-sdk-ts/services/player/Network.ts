import {INetwork, INetworkEvents} from './interface/INetwork';

class Network implements INetwork {
  constructor() {}

  get id(): string {
    return '';
  }

  on<T extends keyof INetworkEvents>(
    event: T,
    listener: INetworkEvents[T]
  ): pc.EventHandle {
    return {} as pc.EventHandle;
  }

  off<T extends keyof INetworkEvents>(
    event: T,
    listener: INetworkEvents[T]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }

  fire<T extends keyof INetworkEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }
}

export default Network;
