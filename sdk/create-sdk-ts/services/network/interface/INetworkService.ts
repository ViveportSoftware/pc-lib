import * as pc from 'playcanvas';

export interface INetworkService {
  /**
   * Player移動的同步頻率
   * 預設值是150ms 可設定的範圍是 30ms ~ 150ms
   */
  moveSyncInterval: number;

  /**
   * 發送自定義訊息
   * @param {Record<string, any>} message - 自定義訊息內容
   * @param {Object} [options] - 其他選項
   * @param {boolean} [options.batch=true] - 是否批次處理訊息，若為 `true`，訊息會被暫存後一併發送（預設值為 `true`）
   * @param {string} [options.messageId] - 訊息ID，用於覆蓋尚未傳出的相同ID訊息
   * @param {string} [options.entityId] - entity guid，指定entity可以透過 receive:message 事件接收到訊息
   * @returns {string} - 訊息ID
   */
  sendMessage<T = Record<string, unknown>>(
    message: T,
    options?: {
      batch?: boolean;
      messageId?: string;
      entityId?: string;
    }
  ): string;

  /**
   * 產生訊息ID
   */
  generateMessageId(): string;

  // sendBotMessage (TBD)

  /**
   * 訂閱指定的事件
   * @param event - 事件名稱
   * @param listener - 回調函數
   */
  on<T extends keyof INetworkServiceEvents>(
    event: T,
    listener: INetworkServiceEvents[T]
  ): pc.EventHandle;

  /**
   * 取消訂閱指定的事件
   * @param event - 事件名稱
   * @param listener - 回調函數
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

export interface INetworkServiceEvents {
  /**
   * 遊戲連線成功時觸發
   * @returns
   */
  connected: () => void;

  /**
   * 遊戲連線失敗時觸發
   * @returns
   */
  error: () => void;

  /**
   * 當接收到自定義訊息時觸發
   * @param messages - 自定義訊息
   * @returns
   */
  'receive:messages': (messages: IMessage[]) => void;

  // 'receive:botMessages' (TBD)

  /**
   * 當接收到trigger訊息時觸發
   * @param triggerMessage - 觸發訊息
   * @returns
   */
  'receive:trigger': (triggerMessage: ITriggerMessage) => void;
}
