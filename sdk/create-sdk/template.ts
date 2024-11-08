const content = `/**
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

/**
 * @interface
 */
class INetwork {
  /**
   * Player 的 network session ID
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
     * 是否在本地端顯示 Player 上方 nameTag，包含 nameTag 裡所有的 icon 和按鈕
     * @type {boolean}
    */
    isVisible;

    constructor(){
        if (this.constructor === INameTag) {
            throw new Error("This is an abstract class and cannot be instantiated directly.");
        }
    }

    /**
     * 更改 Player 的 nameTag 是否在本地端顯示
     * @memberof INameTag
     * @param {boolean} isVisible
     * @returns {void}
     */
    setIsVisible(isVisible) {

    }
}

/**
 * @interface
 * @abstract
 */
class IPlayer{
    /**
     * 玩家的角色暱稱
     * @readonly
     * @type {string}
    */
    displayName;

    /**
     * 玩家是否已經和伺服器斷開連線
     * @readonly
     * @type {boolean}
    */
    isDisposed
    
    /**
     * 玩家的角色
     * @readonly
     * @type {IAvatar}
    */
    avatar;

    /**
     * 玩家的伺服器連線資訊
     * @readonly
     * @type {INetwork}
    */
    network;

    /**
     * 玩家的 nameTag 功能
     * @readonly
     * @type {INameTag}
    */
    nameTag;

    /**
     * Player 在本地端是否為可見
     * @readonly
     * @type {boolean}
    */
    isVisible;

    /**
     * Player 的位置,旋轉,大小資訊
     * @readonly
     * @type {object}
     * @property {pc.Vec3} position - Player 的位置資訊
     * @property {pc.Vec4} rotation - Player 的旋轉資訊
     * @property {pc.Vec3} scale -  Player 的大小資訊
    */
    transform;

    /**
     * Player 的 profile 資訊
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

    constructor(){
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
     * 取得 Player 重生的次數
     * @readonly
     * @type {number}
    */
    spawnCount;

    /**
     * 下墜感設定的倍率。使用這個參數來加強下落的感覺，使得角色下墜更有重量感，讓玩家能感覺到明顯的「重力效果」。
     * 例如，當角色跳躍後開始下落，重力會隨著這個倍率增加，讓角色更快接觸地面
     * @type {number}
    */
    fallingGravityMultiplier;

    /**
     * 重力設定的倍率，會對上升及下墜造成影響
     * @type {number}
    */
    gravityMultiplier

    /**
     * 飛行速度倍率
     * @type {number}
    */
    flySpeedMultiplier

    /**
     * 跑步速度倍率
     * @type {number}
    */
    runSpeedMultiplier

    /**
     * 走路速度倍率
     * @type {number}
    */
    walkSpeedMultiplier

    /**
     * 跳躍高度倍率
     * @type {number}
    */
    jumpHeightMultiplier

    /**
     * 是否能讓遠端玩家看見
     * @type {number}
    */
    isVisibleRemotely


    /**
     * 當 Player 的 avatar 跳起時觸發
     * @memberof IControlledPlayer
     * @event IControlledPlayer#jump
     */

    /**
     * 當 Player 的 avatar 著陸在場景中時觸發，並回傳當前坐標位置資訊
     * @memberof IControlledPlayer
     * @event IControlledPlayer#landed
     * @property {pc.Vec3} position - 當前的坐標位置
     */

    /**
     * 當 Player 的 avatar collider 碰撞到其他 collider 時觸發
     * @memberof IControlledPlayer
     * @event IControlledPlayer#colliderHit
     * @property {pc.Entity} entity - 被觸碰的對象 Entity
     */

    /**
     * 當 Player 的 avatar 進入無限墜落狀態時觸發，通常用來判斷角色已經不在場景中，需要額外做邏輯處理
     * @memberof IControlledPlayer
     * @event IControlledPlayer#infiniteFalling
     */

    /**
     * 當 Player 的 avatar 重生時觸發，回傳重生點位置資訊
     * @memberof IControlledPlayer
     * @event IControlledPlayer.respawned
     * @property {pc.Vec3} position - 重生點的坐標位置
     */

    constructor(){
        super();
        if (this.constructor === IControlledPlayer) {
            throw new Error("This is an abstract class and cannot be instantiated directly.");
        }
    }

    /**
     * 使角色往上跳
     * @memberof IControlledPlayer
     * @returns {void}
     */
    jump(){
        throw new Error("Please implement the jump() function.");
    }

    /**
     * 播放客製的動畫
     * @memberof IControlledPlayer
     * @param {string} stateName: The stateName of animation.
     * @param {pc.Asset} asset: Send the vram file.
     * @param {boolean} [loop] Loop the animation. default is true.
     * @returns {void}
     */
    playAnimation(stateName, asset, loop = true){
        throw new Error("Please implement the playAnimation() function.");
    }

    /**
     * 傳入 stateName 來結束動畫播放
     * @memberof IControlledPlayer
     * @param {string} stateName: The stateName of animation.
     * @returns {void}
     */
    stopAnimation(stateName){
        throw new Error("Please implement the playAnimation() function.");
    }

    /**
     * 使角色回到重生點，預設為場景設定的重生點位置
     * @memberof IControlledPlayer
     * @param {pc.Vec3} [destination] The respawn destination.
     * @returns {void}
     */
    respawn(destination){
         throw new Error("Please implement the respawn() function.");
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
     * The instance in runtime.
     * @type {PlayerService}
     * @readonly
    */
    static instance;

    /**
     * @type {string}
     *  @readonly
    */
    static version = 'create-sdk-version';

    /**
     * 取得 Local player
     * @type {IControlledPlayer}
     * @readonly
    */
    controlledPlayer;

    /**
     * 取得 Remote players
     * @type {ISyncedPlayer[]}
     * @readonly
    */
    syncedPlayers;

    /**
     * 統計目前在房間內有連線的 Players 數量
     * @type {number}
     * @readonly
    */
    playerCount;

    constructor(){
        return PlayerService.instance;
    }
}

export { PlayerService };
`;

export { content };