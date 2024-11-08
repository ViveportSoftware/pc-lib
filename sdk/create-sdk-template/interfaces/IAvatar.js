/**
 * @interface
 * @abstract
 */
class IAvatar{
    /**
     * Player 的 avatar ID
     * @readonly
     * @type {string}
    */
    avatarID

    /**
     * Player 的 avatar 模型連結
     * @readonly
     * @type {string}
    */
    avatarGlb

    /**
     * Player 的 avatar 照片
     * @readonly
     * @type {object}
     * @property {string} head - 玩家的 avatar 大頭照
     * @property {string} fullBody - 玩家的 avatar 全身照
    */
    snapshot

    /**
     * Player 的 avatar 性別，default: 0
     * @readonly
     * @type {CreateExtensionsSDK.AvatarGenderType}
    */
    gender;

    /**
     * Player 的 avatar 種類
     * @readonly
     * @type {CreateExtensionsSDK.AvatarDataType}
    */
    dataType;

    /**
     * 取得 Player avatar 的 BoundingBox
     * @type {pc.BoundingBox}
    */
    boundingBox;

    /**
     * 取得 Player 的 collision，預設 collision type 為 capsule
     * @type {pc.CollisionComponent | undefined}
    */
    collision;

    /**
     * 當 Player 的 avatar 被渲染時觸發；當 avatar 變為 impostor 時則為 null
     * @memberof IAvatar
     * @event IAvatar#avatarExistsChanged 
     * @property {pc.Entity | null} entity - Player 的 avatar entity
     */

    constructor(){
        if (this.constructor === IAvatar) {
            throw new Error("This is an abstract class and cannot be instantiated directly.");
        }
    }

    /**
     * Change the avatar.
     * @memberof IAvatar
     * @param {pc.Asset} asset - Create container asset.
     * @returns {void}
     */
    changeAvatar(asset){
        throw new Error("Please implement the changeAvatar() function.");
    }
}

export default IAvatar;