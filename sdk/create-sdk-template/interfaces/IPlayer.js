import IAvatar from './IAvatar'
import INetwork from './INetwork'
import INameTag from './INameTag'
/**
 * @interface
 * @abstract
 * @extends {pc.EventHandler}
 */
class IPlayer extends pc.EventHandler {
    /**
     * Player 在本地端是否可見
     * @type {boolean}
    */
    isVisible;

    /**
     * 取得玩家的角色暱稱
     * @readonly
     * @type {string}
    */
    displayName;

    /**
     * 取得玩家是否已經和伺服器斷開連線
     * @readonly
     * @type {boolean}
    */
    isDisposed;
    
    /**
     * 取得玩家的角色資訊
     * @readonly
     * @type {IAvatar}
    */
    avatar;

    /**
     * 取得玩家的伺服器連線資訊
     * @readonly
     * @type {INetwork}
    */
    network;

    /**
     * 取得玩家的 nameTag 功能
     * @readonly
     * @type {INameTag}
    */
    nameTag;

    /**
     * 取得 Player 的位置,旋轉,大小資訊
     * @readonly
     * @type {object}
     * @property {pc.Vec3} position - Player 的位置資訊
     * @property {pc.Vec4} rotation - Player 的旋轉資訊
     * @property {pc.Vec3} scale -  Player 的大小資訊
    */
    transform;

    /**
     * 取得 Player 的 profile 資訊
     * @readonly
     * @type {object}
     * @property {string} displayName - Player 的暱稱
     * @property {object} snapshot - Player 的 avatar 圖片
     * @property {string} snapshot.head - Player 的 avatar 大頭照
     * @property {string} snapshot.fullBody - Player 的 avatar 全身照
     * @property {string | undefined} userID - Player 的 ID
     * @property {string | undefined} userName - Player 的名稱
    */
    profile;


    /**
     * 當 Player 的 avatar collider 碰撞到其他 collider 時觸發
     * @memberof IPlayer
     * @event IPlayer#colliderHit
     * @property {pc.Entity} entity - 被觸碰的對象 Entity
     */

    constructor(){
        super();
        if (this.constructor === IPlayer) {
            throw new Error("This is an abstract class and cannot be instantiated directly.");
        }
    }
}

export default IPlayer;