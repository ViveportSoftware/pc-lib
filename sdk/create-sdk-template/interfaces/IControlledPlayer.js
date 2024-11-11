import IPlayer from './IPlayer';

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
     * 停止所有正在播放的動畫
     * @memberof IControlledPlayer
     * @returns {void}
     */
    stopAnimation(){
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

export default IControlledPlayer;