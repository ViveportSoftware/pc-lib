/**
 * @interface
 * @abstract
 */
class IAvatar{
    /**
     * 取得 Player 的 avatar ID
     * @readonly
     * @type {string}
    */
    avatarID;

    /**
     * 取得 Player 的 avatar 模型連結
     * @readonly
     * @type {string}
    */
    avatarGlb;

    /**
     * 取得 Player 的 avatar 照片
     * @readonly
     * @type {object}
     * @property {string} head - 玩家的 avatar 大頭照
     * @property {string} fullBody - 玩家的 avatar 全身照
    */
    snapshot;

    /**
     * 取得 Player 的 avatar 性別，default: 0
     * @readonly
     * @type {CreateExtensionsSDK.AvatarGenderType}
    */
    gender;

    /**
     * 取得 Player 的 avatar 種類
     * @readonly
     * @type {CreateExtensionsSDK.AvatarDataType}
    */
    dataType;

    /**
     * Player avatar 的 BoundingBox
     * @type {pc.BoundingBox}
    */
    boundingBox;

    /**
     * Player 的 collision，預設 collision type 為 capsule
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
}

/**
 * @interface
 */
class INetwork {
  /**
   * 取得 Player 的 network session ID
   * @readonly
   * @type {string}
  */
  id;

  /**
   * 當 Player 成功連線並加入 session 時觸發
   * @memberof INetwork
   * @event INetwork#joined 
   */

  /**
   * 當 Player 斷線或是離開 session 時觸發
   * @memberof INetwork
   * @event INetwork#left 
   */

  constructor(){
      if (this.constructor === INetwork) {
          throw new Error("This is an abstract class and cannot be instantiated directly.");
      }
  }
}

/**
 * @interface
 */
class INameTag {
    /**
     * 是否在本地端顯示 nameTag，包含 nameTag 裡所有的 icon 和按鈕
     * @type {boolean}
    */
    isVisible;

    constructor(){
        if (this.constructor === INameTag) {
            throw new Error("This is an abstract class and cannot be instantiated directly.");
        }
    }
}

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

/**
 * @interface
 * @extends {IPlayer}
 */
class IControlledPlayer extends IPlayer{
    /**
     * Player 是否可以移動
     * @type {boolean}
    */
    canMove;

    /**
     * Player 是否可以跳躍
     * @type {boolean}
    */
    canJump;

    /**
     * Player 是否可以跑步
     * @type {boolean}
    */
    canRun;

    /**
     * Player 的重生點
     * @type {pc.Vec3}
    */
    respawnPosition;

    /**
     * 下墜感設定的倍率
     * 使用這個參數來加強下落的感覺，使得角色下墜更有重量感，讓玩家能感覺到明顯的「重力效果」
     * 例如，當角色跳躍後開始下落，重力會隨著這個倍率增加，讓角色更快接觸地面
     * @type {number}
    */
    fallingGravityMultiplier;

    /**
     * 重力設定的倍率，會對上升及下墜造成影響
     * @type {number}
    */
    gravityMultiplier;

    /**
     * 飛行速度倍率
     * @type {number}
    */
    flySpeedMultiplier;

    /**
     * 跑步速度倍率
     * @type {number}
    */
    runSpeedMultiplier;

    /**
     * 走路速度倍率
     * @type {number}
    */
    walkSpeedMultiplier;

    /**
     * 跳躍高度倍率
     * @type {number}
    */
    jumpMultiplier;

    /**
     * 是否能讓遠端玩家看見
     * @type {number}
    */
    isVisibleRemotely;

    /**
     * 取得角色當前的速度
     * @readonly
     * @type {pc.Vec3}
    */
    velocity;

    /**
     * 取得 Player 重生的次數
     * @readonly
     * @type {number}
    */
    spawnCount;

    /**
     * 當 Player 的 avatar 開始移動時觸發
     * @memberof IControlledPlayer
     * @event IControlledPlayer#move:start
     */

    /**
     * 當 Player 的 avatar 停止移動時觸發
     * @memberof IControlledPlayer
     * @event IControlledPlayer#move:end
     */

    /**
     * 當 Player 的 avatar 跳起時觸發
     * @memberof IControlledPlayer
     * @event IControlledPlayer#jump:start
     */

    /**
     * 當 Player 的 avatar 落地時觸發
     * @memberof IControlledPlayer
     * @event IControlledPlayer#jump:end
     */

    /**
     * 當 Player 的 avatar 著陸在場景中時觸發，並回傳當前坐標位置資訊
     * @memberof IControlledPlayer
     * @event IControlledPlayer#landed
     * @property {pc.Vec3} position - 當前的坐標位置
     */

    /**
     * 當 Player 的 avatar 進入無限墜落狀態時觸發，通常用來判斷角色已經不在場景中，需要額外做邏輯處理
     * @memberof IControlledPlayer
     * @event IControlledPlayer#infiniteFalling
     */

    /**
     * 當 Player 的 avatar 重生時觸發，回傳重生點位置資訊
     * @memberof IControlledPlayer
     * @event IControlledPlayer#respawned
     * @property {pc.Vec3} position - 重生點的坐標位置
     */

    constructor(){
        super();
        if (this.constructor === IControlledPlayer) {
            throw new Error("This is an abstract class and cannot be instantiated directly.");
        }
    }

    /**
     * 使角色原地跳起，如果成功跳起會觸發 jump:start 事件。在部分情況下角色會無法跳起，例如角色正在下墜時，或者是角色已經處於跳躍狀態中，又或是角色受到其他外部力量影響。
     * @memberof IControlledPlayer
     * @returns {void}
     */
    jump(){
        throw new Error("Please implement jump() method.");
    }

    /**
     * 播放客製的動畫
     * @memberof IControlledPlayer
     * @param {string} stateName: The stateName of animation.
     * @param {pc.Asset} asset: Send the vram file.
     * @param {Object} [options] - Optional parameters.
     * @param {boolean} [options.loop=false] - Loop the animation. default is false.
     * @param {boolean} [options.lock=false] - Lock the animation. default is false.
     * @returns {void}
     */
    playAnimation(stateName, asset, {loop = false, lock = false}){
        throw new Error("Please implement playAnimation() method.");
    }

    /**
     * 停止所有正在播放的動畫
     * @memberof IControlledPlayer
     * @returns {void}
     */
    stopAnimation(){
        throw new Error("Please implement stopAnimation() method.");
    }

    /**
     * 使角色回到重生點，重生點為 respawnPosition ，並在重生後觸發 respawned 事件
     * @memberof IControlledPlayer
     * @param {number} [timeout] The respawn destination.
     * @emits IControlledPlayer#respawned
     * @returns {void}
     */
    respawn(timeout = 0){
        throw new Error("Please implement respawn() method.");
    }

    /**
     * 使角色瞬移至指定位置
     * @memberof IControlledPlayer
     * @param {pc.Vec3} destination The teleport destination.
     * @returns {void}
     */
    teleport(destination) {
        throw new Error("Please implement teleport() method.");
    }

    /**
     * 更換角色的 avatar 模型
     * @memberof IAvatar
     * @param {pc.Asset} asset - Create container asset.
     * @returns {void}
     */
    changeAvatar(asset){
        throw new Error("Please implement changeAvatar() method.");
    }
}

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
const version = 'create-sdk-version';

export { CameraService, PlayerService, version };
