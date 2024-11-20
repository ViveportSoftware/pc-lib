import IControlledPlayer from '../interfaces/IControlledPlayer';
import ISyncedPlayer from '../interfaces/ISyncedPlayer';

/**
 * @class
 */
class PlayerService {
    /**
     * @readonly
     * @type {PlayerService}
    */
    static instance;

    /**
     * 取得本地端的 Player 資訊
     * @readonly
     * @type {IControlledPlayer}
    */
    controlledPlayer;

    /**
     * 取得所有在房間內的遠端 Player 資訊
     * @readonly
     * @type {ISyncedPlayer[]}
    */
    syncedPlayers;

    /**
     * 取得目前在房間內有連線的 Players 數量
     * @readonly
     * @type {number}
    */
    playerCount;

    constructor(){
        return PlayerService.instance;
    }
}

export default PlayerService;