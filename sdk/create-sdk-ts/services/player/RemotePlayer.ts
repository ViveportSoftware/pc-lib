import {IRemotePlayer} from './interface/IRemotePlayer';
import {IPlayerEvents} from './interface/IPlayer';
import Player from './Player';

class RemotePlayer extends Player implements IRemotePlayer {
  constructor() {
    super();
  }

  get isAdmin(): boolean {
    return false;
  }

  get isOwner(): boolean {
    return false;
  }

  get isTalking(): boolean {
    return false;
  }

  scaleAvatar(scale: number): void {}

  on<T extends keyof IPlayerEvents>(
    event: T,
    listener: IPlayerEvents[T]
  ): pc.EventHandle {
    return {} as pc.EventHandle;
  }

  off<T extends keyof IPlayerEvents>(
    event: T,
    listener: IPlayerEvents[T]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }

  fire<T extends keyof IPlayerEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }
}

export default RemotePlayer;
