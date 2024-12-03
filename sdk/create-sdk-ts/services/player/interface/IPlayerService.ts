import {ILocalPlayer} from './ILocalPlayer';
import {IRemotePlayer} from './IRemotePlayer';

/**
 * 定義 PlayerService 介面
 */
export interface IPlayerService {
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
}
