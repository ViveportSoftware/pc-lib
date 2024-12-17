import * as pc from 'playcanvas';

export interface INetworkService extends IBotService {
  /**
   * Synchronization frequency of player's movement.
   * Default value is 150ms, the configurable range is 30ms to 150ms.
   */
  moveSyncInterval: number;

  /**
   * Send custom message.
   * @param {Record<string, any>} message - Custom message content.
   * @param {Object} [options] - Other options.
   * @param {boolean} [options.batch=true] - Batch processing of messages: If set to `true`, the messages will be cached and sent together later.
   * @param {string} [options.messageId] - Message ID: Used to override messages with the same ID that have not been sent yet.
   * @param {string} [options.entityId] - Entity GUID: Specifies the entity that can receive the message through the receive:message event.
   * @returns {string} - Message ID.
   */
  sendMessage<T = Record<string, unknown>>(
    data: T,
    options?: {
      batch?: boolean;
      messageId?: string;
      entityId?: string;
    }
  ): string;

  /**
   * Generate a message ID.
   */
  generateMessageId(): string;

  /**
   * Subscribe to a specific event.
   * @param event - Event name
   * @param listener - Callback function
   */
  on<T extends keyof INetworkServiceEvents>(
    event: T,
    listener: INetworkServiceEvents[T]
  ): pc.EventHandle;

  /**
   * Unsubscribe from a specific event.
   * @param event - Event name
   * @param listener - Callback function
   */
  off<T extends keyof INetworkServiceEvents>(
    event: T,
    listener: INetworkServiceEvents[T]
  ): pc.EventHandler;
}

export interface IMessage<T = Record<string, unknown>> {
  playerId: string;
  messageId: string;
  entityId?: string;
  data: T;
}

export interface ITriggerMessage {
  playerId: string;
  entityId?: string | null;
  type?: number | null;
}

export interface INetworkServiceEvents extends IBotGameEvents, IBotOwnerEvents {
  /**
   * Triggered when the game successfully connects.
   * @returns
   */
  connected: () => void;

  /**
   * Triggered when the game fails to connect.
   * @returns
   */
  error: () => void;

  /**
   * Triggered when a custom message is received.
   * @param messages - Custom message
   * @returns
   */
  'receive:messages': (messages: IMessage[]) => void;

  /**
   * Triggered when a trigger message is received.
   * @param triggerMessage - Trigger message
   * @returns
   */
  'receive:trigger': (triggerMessage: ITriggerMessage) => void;
}

interface IBotService {
  /**
   * @private
   * 定義遊戲id，用於識別遊戲
   */
  _gameId: string;

  /**
   * 會從玩家中選擇一位當作master
   */
  readonly masterId: string;

  /**
   * 提供所有玩家的id，並排列順序
   */
  readonly playerIdMap: {[index: number]: string};

  /**
   * 觸發遊戲開始，開始倒數計時
   */
  sendGameStart(): void;

  /**
   * 在計時內滿足遊戲結束條件，提前觸發遊戲結束
   */
  sendGameEnd(): void;

  /**
   *
   * @param event - 事件名稱，可根據需求自訂
   * @param targetId  - 指定的目標id，可根據需求自訂
   *  指定特定的event與targetId，並由server決定誰獲得owner（最快送出訊息者）
   *
   * @example
   *
   * // targetId為entity id
   *
   * // A玩家送出take-ownership事件
   * sendOwnerUpdate('take-ownership', 'f47ac10b-58cb-11d1-a5f3-0000f8751022');
   *
   * // B玩家送出take-ownership事件
   * sendOwnerUpdate('take-ownership', 'f47ac10b-58cb-11d1-a5f3-0000f8751022');
   *
   * // server決定A玩家獲得owner
   * // 通知所有玩家A玩家獲得owner
   *
   * networkService.on('owner:update', (params) => {
   *    if (params.event === 'take-ownership') {
   *      // A玩家獲得owner，successor為A玩家id
   *    }
   * })
   *
   */
  sendOwnerUpdate(event: string, targetId: string): void;

  /**
   * 發送遊戲設定更新
   * @private
   * @param params - 遊戲參數
   * @param {integer} [params.totalPlayer] - 玩家總數
   * @param {integer} [params.readyTime] - 遊戲倒數時間
   * @param {integer} [params.playTime] - 遊戲時間
   * @param {integer} [params.countdownInterval] - 倒數計時間隔
   * @param {number} [params.startDelayTime] - 倒數結束語遊戲開始間的延遲時間
   * @returns
   *
   */
  _sendGameUpdate(params: IGameUpdateParams): void;
}

interface IBotGameEvents {
  /**
   *
   * @param masterId - 通知房間的master是哪一位玩家
   * @returns
   */
  'game:masterNotify': (masterId: string) => void;

  /**
   * 當有玩家進入遊戲時觸發，通知所有玩家需等待其他玩家
   * @returns
   */
  'game:waitForPlayer': () => void;

  /**
   * 滿足遊戲人數條件，通知所有玩家遊戲可以開始
   * @param playerIDMap - 提供所有玩家的id，並排列順序
   * @returns
   */
  'game:allPlayerReady': (playerIDMap: {[index: number]: string}) => void;

  /**
   * 觸發遊戲開始，開始倒數計時（目前只會發送一次）
   * @param second - 遊戲倒數時間
   * @returns
   */
  'game:countdown': (second: number) => void;

  /**
   * 遊戲間的倒數計時，根據設定的時間間隔發送
   * @param second - 遊戲時間
   */
  'game:timer': (second: number) => void;

  /**
   * 遊戲時間到，遊戲結束
   * @returns
   */
  'game:timeUp': () => void;

  /**
   * 滿足條件，遊戲結束
   * @returns
   */
  'game:end': () => void;
}

export interface IGameUpdateParams {
  /**
   * 玩家總數，只能為整數
   * @type {integer}
   */
  totalPlayer?: number;
  /**
   * 遊戲倒數時間，只能為整數
   * @type {integer}
   */
  readyTime?: number;
  /**
   * 遊戲時間，只能為整數
   * @type {integer}
   */
  playTime?: number;
  /**
   * 倒數計時間隔，只能為整數
   * @type {integer}
   */
  countdownInterval?: number;
  /**
   * 倒數結束語遊戲開始間的延遲時間
   * @type {number}
   */
  startDelayTime?: number;
}

export interface IOwnerUpdateMessage {
  /**
   * 事件名稱，可根據需求自訂
   * @type {string}
   */
  event: string;

  /**
   * 指定的目標id，可根據需求自訂
   * @type {string}
   */
  targetId: string;

  /**
   * 成功獲得owner的玩家id
   * @type {string}
   */
  successor: string;

  /**
   * 更新時間 timestamp
   * @type {number}
   */
  updateTime: number;
}

interface IBotOwnerEvents {
  /**
   * 收到owner更新時觸發
   * @param {IOwnerUpdateMessage} updateMessage - 事件參數，包含事件名稱、目標 id、成功玩家等信息
   * @returns
   */
  'receive:ownerUpdate': (updateMessage: IOwnerUpdateMessage) => void;
}
