import {IPlayerService} from './interface/IPlayerService';
import {IControlledPlayer} from './interface/IControlledPlayer';
import {ISyncedPlayer} from './interface/ISyncedPlayer';

class PlayerService implements IPlayerService {
  private static _instance?: PlayerService;

  constructor() {
    if (PlayerService._instance) return PlayerService._instance;
    PlayerService._instance = this;
  }

  /**
   * @type {ControlledPlayer | null}
   */
  get controlledPlayer(): IControlledPlayer | null {
    return null;
  }

  /**
   * @type {SyncedPlayer[]}
   */
  get syncedPlayers(): ISyncedPlayer[] {
    return [];
  }

  get playerCount(): number {
    return 0;
  }
}

export default PlayerService;
