import * as pc from 'playcanvas';
import {EventHandlerMethods} from '../../../types';
import * as AvatarTypes from '../enums/avatar';
import {IAvatarSnapshot} from './IAvatarSnapshot';
import {IAvatarTransform} from './IAvatarTransform';

/**
 * 定義 Avatar 介面
 */
export interface IAvatar extends EventHandlerMethods {
  /**
   * Player avatar 的 BoundingBox
   */
  boundingBox?: pc.BoundingBox;

  /**
   * Player 的 collision，預設 collision type 為 capsule
   */
  collision?: pc.CollisionComponent;

  /**
   * 取得 Player 的 avatar ID
   */
  readonly avatarId: string;

  /**
   * 取得 Player 的 avatar 模型連結
   */
  readonly avatarGlb: string;

  /**
   * 取得 Player 的 avatar 照片
   */
  readonly snapshot?: IAvatarSnapshot;

  /**
   * 取得 Player 的 avatar 性別，default: 0
   */
  readonly gender: AvatarTypes.GenderTypes;

  /**
   * 取得 Player 的 avatar 種類
   */
  readonly dataType: AvatarTypes.DataTypes;

  /**
   * 取得 Player 的 avatar 位置,旋轉,大小資訊
   */
  readonly transform?: IAvatarTransform;

  /*
   * 取得 Avatar 的 Bone Entity
   * @param boneName - 骨架名稱
   * {@link https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_vrm-1.0/humanoid.md | VRM 骨架名稱}
   */
  getBone(boneName: string): pc.Entity | null;

  /**
   * 訂閱指定的事件
   * @param event - 事件名稱
   * @param listener - 回調函數
   */
  on<T extends keyof IAvatarEvents>(
    event: T,
    listener: IAvatarEvents[T]
  ): pc.EventHandle;

  /**
   * 取消訂閱指定的事件
   * @param event - 事件名稱
   * @param listener - 回調函數
   */
  off<T extends keyof IAvatarEvents>(
    event: T,
    listener: IAvatarEvents[T]
  ): pc.EventHandler;

  /**
   * 發送指定的事件
   * @param event - 事件名稱
   * @param [args] - 事件參數
   */
  fire<T extends keyof IAvatarEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler;
}

/**
 * 定義 IPlayer 支援的事件和對應的參數
 */
export interface IAvatarEvents {
  /**
   * 當 Player 的 avatar 被渲染時觸發；當 avatar 變為 impostor 時則為 null
   * @param entity - 當前的坐標位置
   */
  avatarExistsChanged: (entity: pc.Entity | null) => void;
}
