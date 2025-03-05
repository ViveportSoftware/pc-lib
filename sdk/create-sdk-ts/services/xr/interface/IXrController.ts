import * as pc from 'playcanvas';

/**
 * Define the interface of XrController.
 */
export interface IXrController {
  /**
   * @planned The entity of the XR controller model.
   */
  readonly modelEntity: pc.Entity | null;

  /**
   * @planned The `XrInputSource` of the controller.
   */
  readonly inputSource: pc.XrInputSource | null;

  /**
   * @planned The handedness of the controller. The value should be either 'left' or 'right.
   */
  readonly handedness: typeof pc.XRHAND_LEFT | typeof pc.XRHAND_RIGHT;

  /**
   * @planned Sets the controller model asset.
   * @param {pc.Asset} asset - The controller model asset. The asset type can be either `template` or `container`.
   * @param {Object} [options] - Optional parameters.
   * @param {boolean} [options.castShadows=false] - Determines whether the model casts shadows. Default is `false`. Only applicable when the asset type is `container`.
   * @param {boolean} [options.receiveShadows=false] - Determines whether the model receives shadows. Default is `false`. Only applicable when the asset type is `container`.
   * @param {(entity: pc.Entity) => void} [options.onCompleted] - Callback function triggered when the model entity is created.
   */
  setModelAsset(
    asset: pc.Asset,
    options?: {
      castShadows: boolean;
      receiveShadows: boolean;
      onCompleted?: (entity: pc.Entity) => void;
    }
  ): void;

  /**
   * @planned Reverts to the default controller model in VIVERSE CREATE.
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
   * @planned Triggered when an `XrInputSource` is added to an {@link IXrController|XrController}.
   */
  add: (inputSource: pc.XrInputSource) => void;

  /**
   * @planned Triggered when an `XrInputSource` is removed from an {@link IXrController|XrController}.
   */
  remove: (inputSource: pc.XrInputSource) => void;
}
