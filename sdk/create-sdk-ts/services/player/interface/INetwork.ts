import * as pc from 'playcanvas';
import {EventHandlerMethods} from '../../../types';

/**
 * 定義 Network 介面
 */
export interface INetwork extends EventHandlerMethods {
  /**
   * 取得 Player 的 network session ID
   */
  readonly id: string;

  /**
   * 訂閱指定的事件
   * @param event - 事件名稱
   * @param listener - 回調函數
   */
  on<T extends keyof INetworkEvents>(
    event: T,
    listener: INetworkEvents[T]
  ): pc.EventHandle;

  /**
   * 取消訂閱指定的事件
   * @param event - 事件名稱
   * @param listener - 回調函數
   */
  off<T extends keyof INetworkEvents>(
    event: T,
    listener: INetworkEvents[T]
  ): pc.EventHandler;

  /**
   * 發送指定的事件
   * @param event - 事件名稱
   * @param [args] - 事件參數
   */
  fire<T extends keyof INetworkEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler;
}

/**
 * 定義 IPlayer 支援的事件和對應的參數
 */
export interface INetworkEvents {
  /**
   * 當 Player 成功連線並加入 session 時觸發
   */
  joined: () => void;

  /**
   * 當 Player 斷線或是離開 session 時觸發
   */
  left: () => void;
}
