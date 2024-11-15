import IControlledPlayer from './interfaces/IControlledPlayer';
import ISyncedPlayer from './interfaces/ISyncedPlayer';

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

/**
 * @class
 */
class CameraService {
    /**
     * @readonly
     * @type {CameraService}
    */
    static instance;

    constructor(){
        return CameraService.instance;
    }

    /**
     * 切換為客製化的相機，使用客製相機期間，會關閉所有 Viverse 內建的相機機制
     * @memberof CameraService
     * @param {pc.Entity} camera - 相機 Entity，此 Entity 必須包含 pc.CameraComponent
     * @returns {Function} 結束使用客製相機並恢復 Viverse 內建的相機機制
     */
    switchCamera(camera){
        throw new Error("Please implement switchCamera() method.");
        return function() {};
    }
}

/**
 * 取得 Create SDK 的版本
 * @readonly
 * @type {string}
*/
const version = 'create-sdk-version'


export { PlayerService, CameraService, version };