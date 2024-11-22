import {IPlayer, IPlayerEvents} from './IPlayer';

/**
 * 定義 ControlledPlayer 介面
 */
export interface IControlledPlayer extends IPlayer {
  /**
   * Player 是否可以移動
   */
  canMove: boolean;

  /**
   * Player 是否可以跳躍
   */
  canJump: boolean;

  /**
   * Player 是否可以跑步
   */
  canRun: boolean;

  /**
   * Player 的重生點，預設為 null<br>
   * 執行 respawn() 時，優先使用 respawnPosition 作為重生位置<br>
   * 若 respawnPosition 為 null，則會使用 Viverse Create 原本的機制決定重生位置(checkpoint, spawn-point tag)
   */
  respawnPosition: pc.Vec3 | null;

  /**
   * 下墜感設定的倍率<br>
   * 使用這個參數來加強下落的感覺，使得角色下墜更有重量感，讓玩家能感覺到明顯的「重力效果」<br>
   * 例如，當角色跳躍後開始下落，重力會隨著這個倍率增加，讓角色更快接觸地面
   */
  fallingGravityMultiplier: number;

  /**
   * 重力設定的倍率，會對上升及下墜造成影響
   */
  gravityMultiplier: number;

  /**
   * 飛行速度倍率
   */
  flySpeedMultiplier: number;

  /**
   * 跑步速度倍率
   */
  runSpeedMultiplier: number;

  /**
   * 走路速度倍率
   */
  walkSpeedMultiplier: number;

  /**
   * 跳躍高度倍率
   */
  jumpMultiplier: number;

  /**
   * 是否能讓遠端玩家看見
   */
  isVisibleRemotely: boolean;

  /**
   * Player 是否可以飛行
   */
  readonly canFly: boolean;

  /**
   * 取得角色當前的速度
   */
  readonly velocity?: pc.Vec3;

  /**
   * 取得 Player 重生的次數
   */
  readonly spawnCount: number;

  /**
   * 使角色原地跳起，如果成功跳起會觸發 jump:start 事件<br>
   * 在部分情況下角色會無法跳起，例如角色正在下墜時，或者是角色已經處於跳躍狀態中，又或是角色受到其他外部力量影響
   */
  jump(): void;

  /**
   * 播放客製的動畫
   * @param {string} stateName - The stateName of animation.
   * @param {pc.Asset} asset - Send the vram file.
   * @param {Object} [options] - Optional parameters.
   * @param {boolean} [options.loop=false] - Loop the animation. default is false.
   * @param {boolean} [options.lock=false] - Lock the animation. default is false.
   */
  playAnimation(
    stateName: string,
    asset: pc.Asset,
    options?: {loop: boolean; lock: boolean}
  ): void;

  /**
   * 停止所有正在播放的動畫
   * @returns {void}
   */
  stopAnimation(): void;

  /**
   * 使角色回到重生點，重生點為 respawnPosition，並在重生後觸發 respawned 事件<br>
   * 若 respawnPosition 為 null，則會使用 Viverse Create 原本的機制決定重生位置(checkpoint, spawn-point tag)
   * @param {number} [timeout] - 延遲重生的時間，單位為毫秒
   */
  respawn(timeout?: number): void;

  /**
   * 使角色瞬移至目標位置
   * @param {pc.Vec3} destination - 目標位置
   * @param {number} [rotationY] - y 軸旋轉角度
   */
  teleport(destination: pc.Vec3, rotationY?: number): void;

  /**
   * 更換角色的 avatar 模型
   * @param {pc.Asset} asset - avatar 模型的 asset
   */
  changeAvatar(asset: pc.Asset): void;

  /**
   * 訂閱指定的事件
   * @param event - 事件名稱
   * @param listener - 回調函數
   */
  on<T extends keyof IControlledPlayerEvents>(
    event: T,
    listener: IControlledPlayerEvents[T]
  ): pc.EventHandle;

  /**
   * 取消訂閱指定的事件
   * @param event - 事件名稱
   * @param listener - 回調函數
   */
  off<T extends keyof IControlledPlayerEvents>(
    event: T,
    listener: IControlledPlayerEvents[T]
  ): pc.EventHandler;
}

/**
 * 定義 IControlledPlayer 支援的事件和對應的參數
 */
export interface IControlledPlayerEvents extends IPlayerEvents {
  /**
   * 當 Player 初始化完成時觸發
   */
  'player:ready': () => void;

  /**
   * 當 Player 的 avatar 開始移動時觸發
   */
  'move:start': () => void;

  /**
   * 當 Player 的 avatar 停止移動時觸發
   */
  'move:end': () => void;

  /**
   * 當 Player 的 avatar 開始跑步時觸發
   */
  'run:start': () => void;

  /**
   * 當 Player 的 avatar 停止跑步時觸發
   */
  'run:end': () => void;

  /**
   * 當 Player 的 avatar 開始飛行時觸發
   */
  'fly:start': () => void;

  /**
   * 當 Player 的 avatar 停止飛行時觸發
   */
  'fly:end': () => void;

  /**
   * 當 Player 的 avatar 跳起時觸發
   */
  'jump:start': () => void;

  /**
   * 當 Player 的 avatar 落地時觸發
   */
  'jump:end': () => void;

  /**
   * 當 Player 的 avatar 著陸在場景中時觸發，並回傳當前坐標位置資訊
   * @param position - 當前的坐標位置
   */
  landed: (position: pc.Vec3) => void;

  /**
   * 當 Player 的 avatar 進入無限墜落狀態時觸發，通常用來判斷角色已經不在場景中，需要額外做邏輯處理
   */
  infiniteFalling: () => void;

  /**
   * 當 Player 的 avatar 重生時觸發，回傳重生點位置資訊
   * @param position - 重生點的坐標位置
   */
  respawned: (position: pc.Vec3) => void;
}
