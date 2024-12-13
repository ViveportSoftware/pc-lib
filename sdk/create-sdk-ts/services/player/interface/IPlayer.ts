import * as pc from 'playcanvas';
import {EventHandlerMethods} from '../../../types';
import {IAvatar} from './IAvatar';
import {INetwork} from './INetwork';
import {INameTag} from './INameTag';
import {IPlayerProfile} from './IPlayerProfile';

/**
 * 定義 Player 介面
 */
export interface IPlayer extends EventHandlerMethods {
  /**
   * Player 在本地端是否可見
   */
  isVisible: boolean;

  /**
   * 取得玩家的角色暱稱
   */
  readonly displayName: string;

  /**
   * 取得玩家是否已經和伺服器斷開連線
   */
  readonly isDisposed: boolean;

  /**
   * 取得玩家的角色資訊
   */
  readonly avatar?: IAvatar;

  /**
   * 取得玩家的伺服器連線資訊
   */
  readonly network?: INetwork;

  /**
   * 取得玩家的 nameTag 功能
   */
  readonly nameTag?: INameTag;

  /**
   * 取得 Player 的 profile 資訊
   */
  readonly profile?: IPlayerProfile;

  /**
   * 取得 player entity
   */
  readonly entity?: pc.Entity;

  /**
   * 訂閱指定的事件
   * @param event - 事件名稱
   * @param listener - 回調函數
   */
  on<T extends keyof IPlayerEvents>(
    event: T,
    listener: IPlayerEvents[T]
  ): pc.EventHandle;

  /**
   * 取消訂閱指定的事件
   * @param event - 事件名稱
   * @param listener - 回調函數
   */
  off<T extends keyof IPlayerEvents>(
    event: T,
    listener: IPlayerEvents[T]
  ): pc.EventHandler;

  /**
   * 發送指定的事件
   * @param event - 事件名稱
   * @param [args] - 事件參數
   */
  fire<T extends keyof IPlayerEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler;
}

/**
 * 定義 IPlayer 支援的事件和對應的參數
 */
export interface IPlayerEvents {
  /**
   * 當 Player 的 avatar collider 碰撞到其他 collider 時觸發
   * @param event - 碰撞結果的詳細資訊
   */
  colliderHit: (event: pc.ContactResult) => void;
}
