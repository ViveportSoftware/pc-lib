import {IPlayerService, IPlayerServiceEvents} from './interface/IPlayerService';
import {ILocalPlayer} from './interface/ILocalPlayer';
import {IRemotePlayer} from './interface/IRemotePlayer';

class PlayerService implements IPlayerService {
  private static _instance?: PlayerService;

  constructor() {
    if (PlayerService._instance) return PlayerService._instance;
    PlayerService._instance = this;
  }

  /**
   * @type {LocalPlayer | null}
   */
  get localPlayer(): ILocalPlayer | null {
    return null;
  }

  /**
   * @type {RemotePlayer[]}
   */
  get remotePlayers(): IRemotePlayer[] {
    return [];
  }

  get playerCount(): number {
    return 0;
  }

  on<T extends keyof IPlayerServiceEvents>(
    event: T,
    listener: IPlayerServiceEvents[T]
  ): pc.EventHandle {
    return {} as pc.EventHandle;
  }

  off<T extends keyof IPlayerServiceEvents>(
    event: T,
    listener: IPlayerServiceEvents[T]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }

  fire<T extends keyof IPlayerServiceEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }
}

export default PlayerService;
