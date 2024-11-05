const content = `/**
 * @abstract
 * @class
 */
class IAvatar{
    /**
     * The gender of the avatar.
     * @type {typeof CreateExtensionsSDK.AvatarGenderType}
    */
    gender;

    constructor(){
        if (this.constructor === IAvatar) {
            throw new Error("This is an abstract class and cannot be instantiated directly.");
        }
    }

    /**
     * @function changeAvatar
     * @description Change the avatar.
     * @param {pc.Asset} asset: Create container asset.
     * 
     */
    changeAvatar(asset){
        throw new Error("Please implement the changeAvatar() function.");
    }
}

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

/**
 * @abstract
 * @class
 * @extends {IPlayer}
 */
class IControlledPlayer extends IPlayer{
    /**
     * The fly speed ratio.
     * @type {number}
    */
    flySpeed;

    constructor(){
        super();
        if (this.constructor === IControlledPlayer) {
            throw new Error("This is an abstract class and cannot be instantiated directly.");
        }
    }

    /**
     *  @function jump
     *  @description Trigger controlledPlayer to jump once.
     */
    jump(){
        throw new Error("Please implement the jump() function.");
    }

    /**
     * @function respawn
     * @description Respawn the avatar at a point or one of spawn points.
     * @param {pc.Vec3} [destination] The respawn destination.
     * 
     */
    respawn(destination){
         throw new Error("Please implement the respawn() function.");
    }

    /**
     * @function playAnimation
     * @description Respawn the avatar at a point or one of spawn points.
     * @param {string} stateName: The stateName of animation.
     * @param {pc.Asset} asset: Send the vram file.
     * @param {boolean} [loop] Loop the animation. default is true.
     */
    playAnimation(stateName, asset, loop){
        throw new Error("Please implement the playAnimation() function.");
    }
}

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
`;

export { content };