import {ILocalPlayer} from './ILocalPlayer';
import {IRemotePlayer} from './IRemotePlayer';
import {EventHandlerMethods} from '../../../types';

/**
 * 定義 PlayerService 介面
 */
export interface IPlayerService extends EventHandlerMethods {
  /**
   * 取得本地端的 Player 資訊
   */
  readonly localPlayer: ILocalPlayer | null;

  /**
   * 取得所有在房間內的遠端 Player 資訊
   */
  readonly remotePlayers: IRemotePlayer[];

  /**
   * 取得目前在房間內有連線的 Players 數量
   */
  readonly playerCount: number;

  /**
   * 訂閱指定的事件
   * @param event - 事件名稱
   * @param listener - 回調函數
   */
  on<T extends keyof IPlayerServiceEvents>(
    event: T,
    listener: IPlayerServiceEvents[T]
  ): pc.EventHandle;

  /**
   * 取消訂閱指定的事件
   * @param event - 事件名稱
   * @param listener - 回調函數
   */
  off<T extends keyof IPlayerServiceEvents>(
    event: T,
    listener: IPlayerServiceEvents[T]
  ): pc.EventHandler;
}

export interface IPlayerServiceEvents {
  /**
   * 當 Remote Player 加入 session 時觸發
   * @param remotePlayer - 遠端玩家的實例，該物件為 `IRemotePlayer` 類別，包含玩家的相關資訊。
   */
  'remotePlayer:joined': (remotePlayer: IRemotePlayer) => void;

  /**
   * 當 Remote Player 離開 session 時觸發
   * @param remotePlayer - 遠端玩家的實例，該物件為 `IRemotePlayer` 類別，包含玩家的相關資訊。
   */
  'remotePlayer:left': (remotePlayer: IRemotePlayer) => void;
}
