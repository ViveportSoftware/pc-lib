import IControlledPlayer from './interfaces/IControlledPlayer';

class PlayerService {
    /**
     * @type {PlayerService}
     * The instance in runtime.
    */
    static instance;

    /**
     * @type {string}
    */
    static version = 'create-sdk-version';

    /**
     * The player represent yourself.
     * @type {IControlledPlayer}
    */
    controlledPlayer;

    constructor(){
        return PlayerService.instance;
    }
}


export { PlayerService };