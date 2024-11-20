import IPlayer from './IPlayer';

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
     * Player 的重生點，預設為 null<br>
     * 執行 respawn() 時，優先使用 respawnPosition 作為重生位置<br>
     * 若 respawnPosition 為 null，則會使用 Viverse Create 原本的機制決定重生位置(checkpoint, spawn-point tag)
     * @type {pc.Vec3|null}
    */
    respawnPosition = null;

    /**
     * 下墜感設定的倍率<br>
     * 使用這個參數來加強下落的感覺，使得角色下墜更有重量感，讓玩家能感覺到明顯的「重力效果」<br>
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
     * 當 Player 的 avatar 開始跑步時觸發
     * @memberof IControlledPlayer
     * @event IControlledPlayer#run:start
     */

    /**
     * 當 Player 的 avatar 停止跑步時觸發
     * @memberof IControlledPlayer
     * @event IControlledPlayer#run:end
     */

    /**
     * 當 Player 的 avatar 開始飛行時觸發
     * @memberof IControlledPlayer
     * @event IControlledPlayer#fly:start
     */

    /**
     * 當 Player 的 avatar 停止飛行時觸發
     * @memberof IControlledPlayer
     * @event IControlledPlayer#fly:end
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
     * 當 Player 的 avatar 進入無限墜落狀態時觸發<br>
     * 通常用來判斷角色已經不在場景中，需要額外做邏輯處理
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
     * 使角色原地跳起，如果成功跳起會觸發 jump:start 事件<br>
     * 在部分情況下角色會無法跳起，例如角色正在下墜時，或者是角色已經處於跳躍狀態中，又或是角色受到其他外部力量影響
     * @memberof IControlledPlayer
     * @returns {void}
     */
    jump(){
        throw new Error("Please implement jump() method.");
    }

    /**
     * 播放客製的動畫
     * @memberof IControlledPlayer
     * @param {string} stateName - The stateName of animation.
     * @param {pc.Asset} asset - Send the vram file.
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
     * 使角色回到重生點，重生點為 respawnPosition，並在重生後觸發 respawned 事件<br>
     * 若 respawnPosition 為 null，則會使用 Viverse Create 原本的機制決定重生位置(checkpoint, spawn-point tag)
     * @memberof IControlledPlayer
     * @param {number} [timeout] - 延遲重生的時間，單位為毫秒
     * @emits IControlledPlayer#respawned
     * @returns {void}
     */
    respawn(timeout = 0){
        throw new Error("Please implement respawn() method.");
    }

    /**
     * 使角色瞬移至目標位置
     * @memberof IControlledPlayer
     * @param {pc.Vec3} destination - 目標位置
     * @param {number} [rotationY] - y 軸旋轉角度
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

export default IControlledPlayer;