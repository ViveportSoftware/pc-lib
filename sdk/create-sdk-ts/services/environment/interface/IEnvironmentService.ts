import * as EnvironmentTypes from '../enums/environment';

/**
 * Define the interface of EnvironmentService.
 */
export interface IEnvironmentService {
  /**
   * Change fly mode.
   */
  flyMode: EnvironmentTypes.FlyModeTypes;

  /**
   * Change impostor mode.
   */
  impostorMode: EnvironmentTypes.ImpostorModeTypes;
}
