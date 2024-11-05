import IAvatar from './IAvatar'

/**
 * @abstract
 * @class
 */
class IPlayer{
    /**
     * The display name of the player.
     * @type {string}
    */
    displayName;
    
    /**
     * The avatar interface of the player.
     * @type {IAvatar}
    */
    avatar;

    constructor(){
        if (this.constructor === IPlayer) {
            throw new Error("This is an abstract class and cannot be instantiated directly.");
        }
    }
}

export default IPlayer;