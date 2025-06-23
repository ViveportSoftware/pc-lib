import * as pc from 'playcanvas';
import * as XrTypes from '../enums/xr';

/**
 * Define the interface of XrController.
 */
export interface IXrController {
  /**
   * The entity of the XR controller model.
   */
  readonly modelEntity: pc.Entity | null;

  /**
   * The `XrInputSource` of the controller.
   */
  readonly inputSource: pc.XrInputSource | null;

  /**
   * The handedness of the controller. The value should be either 'left' or 'right'.
   */
  readonly handedness: typeof pc.XRHAND_LEFT | typeof pc.XRHAND_RIGHT;

  /**
   * The locomotion type of the controller.
   */
  locomotionType: XrTypes.LocomotionTypes;

  /**
   * Set the controller model asset.
   * @param {pc.Asset} asset - The controller model asset. The asset type can be either `template` or `container`.
   * @param {Object} [options] - Optional parameters.
   * @param {boolean} [options.castShadows=false] - Determine whether the model casts shadows. Default is `false`. Only applicable when the asset type is `container`.
   * @param {boolean} [options.receiveShadows=false] - Determine whether the model receives shadows. Default is `false`. Only applicable when the asset type is `container`.
   * @param {(entity: pc.Entity) => void} [options.onCompleted] - Callback function triggered when the model entity is created.
   */
  setModelAsset(
    asset: pc.Asset,
    options?: {
      castShadows?: boolean;
      receiveShadows?: boolean;
      onCompleted?: (entity: pc.Entity) => void;
    }
  ): void;

  /**
   * Revert to the default controller model in VIVERSE CREATE.
   */
  resetModelAsset(): void;

  /**
   * Subscribe to a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  on<T extends keyof IXrControllerEvents>(
    event: T,
    listener: IXrControllerEvents[T]
  ): pc.EventHandle;

  /**
   * Unsubscribe from a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  off<T extends keyof IXrControllerEvents>(
    event: T,
    listener: IXrControllerEvents[T]
  ): pc.EventHandler;
}

export interface IXrControllerEvents {
  /**
   * Triggered when an `XrInputSource` is added to an {@link IXrController|XrController}.
   */
  add: (inputSource: pc.XrInputSource) => void;

  /**
   * Triggered when an `XrInputSource` is removed from an {@link IXrController|XrController}.
   */
  remove: (inputSource: pc.XrInputSource) => void;
}
