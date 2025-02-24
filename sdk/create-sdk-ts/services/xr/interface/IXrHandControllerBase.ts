import * as pc from 'playcanvas';
import * as XrTypes from '../enums/xr';
import {EventHandlerMethods} from '../../../types';

/**
 * Define the base interface of XrController and XrHand.
 */
export interface IXrHandControllerBase extends EventHandlerMethods {
  /**
   * @planned The entity of the xr hand or the xr controller.
   */
  readonly entity: pc.Entity | null;

  /**
   * @planned The input source of the hand or the controller.
   */
  readonly inputSource: pc.XrInputSource | null;

  /**
   * @planned The handness of the hand or the controller
   */
  readonly handedness: XrTypes.HandednessTypes;

  /**
   * @planned Set hand and controller's model asset.
   * @param {pc.Asset | undefined} [asset] -
   * @returns {Promise<pc.Entity | null>} - Return the entity of the hand or the controller.
   */
  setModelAsset(asset?: pc.Asset): Promise<pc.Entity | null>;

  /**
   * @planned Revert to the default controller model in VIVERSE CREATE.
   */
  resetModelAsset(): void;
}
