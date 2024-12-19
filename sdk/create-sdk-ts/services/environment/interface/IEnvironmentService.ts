import * as EnvironmentTypes from '../enums/environment';

/**
 * 定義 EnvironmentService 介面
 */
export interface IEnvironmentService {
  /**
   * 改變 Impostor 模式
   */
  impostorMode: EnvironmentTypes.ImpostorModeTypes;

  /**
   * Player 互相可否物理碰撞
   */
  canPlayersCollide: boolean;
}
