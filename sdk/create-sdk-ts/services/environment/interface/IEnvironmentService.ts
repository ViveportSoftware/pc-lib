import * as EnvironmentTypes from '../enums/environment';

/**
 * Define the interface of EnvironmentService.
 */
export interface IEnvironmentService {
  /**
   * Change impostor mode.
   */
  impostorMode: EnvironmentTypes.ImpostorModeTypes;

  /**
   * @inProgress If players can physically collide with each other.
   */
  canPlayersCollide: boolean;
}
