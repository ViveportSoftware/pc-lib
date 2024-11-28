import {ISyncedPlayer} from './interface/ISyncedPlayer';
import {IPlayerEvents} from './interface/IPlayer';
import Player from './Player';

class SyncedPlayer extends Player implements ISyncedPlayer {
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

export default SyncedPlayer;
