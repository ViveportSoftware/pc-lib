import {IPlayerService} from './interface/IPlayerService';
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
}

export default PlayerService;
