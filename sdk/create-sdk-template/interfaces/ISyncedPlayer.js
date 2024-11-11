import IPlayer from './IPlayer';

/**
 * @interface
 * @extends {IPlayer}
 */
class ISyncedPlayer extends IPlayer{
    /**
     * 是否為 admin
     * @type {boolean}
    */
    isAdmin;

    /**
     * 是否為 owner
     * @type {boolean}
    */
    isOwner;

    /**
     * 是否正在說話
     * @type {boolean}
    */
    isTalking;

    constructor(){
        super();
        if (this.constructor === ISyncedPlayer) {
            throw new Error("This is an abstract class and cannot be instantiated directly.");
        }
    }
}

export default ISyncedPlayer;