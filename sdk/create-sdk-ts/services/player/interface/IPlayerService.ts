import {ILocalPlayer} from './ILocalPlayer';
import {IRemotePlayer} from './IRemotePlayer';
import {EventHandlerMethods} from '../../../types';

/**
 * Define PlayerService interface.
 */
export interface IPlayerService extends EventHandlerMethods {
  /**
   * Get local player information.
   */
  readonly localPlayer: ILocalPlayer | null;

  /**
   * Get the information of all remote players in the room.
   */
  readonly remotePlayers: IRemotePlayer[];

  /**
   * Get the number of players currently connected in the room.
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
