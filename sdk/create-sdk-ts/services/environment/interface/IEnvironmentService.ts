import * as EnvironmentTypes from '../enums/environment';

/**
 * Define the interface of EnvironmentService.
 */
export interface IEnvironmentService {
  /**
   * @beta Change impostor mode.
   */
  impostorMode: EnvironmentTypes.ImpostorModeTypes;

  /**
   * Player 互相可否物理碰撞
   */
  canPlayersCollide: boolean;
}
