/**
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

export default IAvatar;