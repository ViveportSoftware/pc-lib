import IControlledPlayer from './interfaces/IControlledPlayer';
import ISyncedPlayer from './interfaces/ISyncedPlayer';

/**
 * @class
 */
class PlayerService {
    /**
     * The instance in runtime.
     * @type {PlayerService}
     * @readonly
    */
    static instance;

    /**
     * @type {string}
     *  @readonly
    */
    static version = 'create-sdk-version';

    /**
     * 取得 Local player
     * @type {IControlledPlayer}
     * @readonly
    */
    controlledPlayer;

    /**
     * 取得 Remote players
     * @type {ISyncedPlayer[]}
     * @readonly
    */
    syncedPlayers;

    /**
     * 統計目前在房間內有連線的 Players 數量
     * @type {number}
     * @readonly
    */
    playerCount;

    constructor(){
        return PlayerService.instance;
    }
}


export { PlayerService };