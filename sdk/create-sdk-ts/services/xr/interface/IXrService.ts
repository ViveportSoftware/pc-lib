import {EventHandlerMethods} from '../../../types';
import {IXrController} from './IXrController';
import * as XrTypes from '../enums/xr';

/**
 * Define XrService interface.
 */
export interface IXrService extends EventHandlerMethods {
  /**
   * Whether VIVERSE VR system is ready.
   */
  readonly isVrReady: boolean;

  /**
   * Gets {@link IXrController|XrController} information.
   */
  readonly controllers: {left?: IXrController; right?: IXrController};

  /**
   * Start VIVERSE XR session. NOTE: WebXR requires a user action (key press, click, or touch) to enter and cannot start automatically.
   * @param {XrTypes.SessionTypes} type - XR session type
   * @example
   * // The VIVERSE VR system might not be ready when the script is loaded.
   * button.active = false;
   * button.on('click', () => {
   *    xrService.start(XrTypes.SessionTypes.Vr);
   * });
   * if(xrService.isVrReady){
   *   button.active = true;
   * } else {
   *   xrService.on('vr:ready', () => {
   *     button.active = true;
   *     xrService.off('vr:ready');
   *   });
   * }
   */
  start(type: XrTypes.SessionTypes): void;

  /**
   * End VIVERSE XR session
   */
  end(): void;

  /**
   * Subscribe to a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  on<T extends keyof IXrServiceEvents>(
    event: T,
    listener: IXrServiceEvents[T]
  ): pc.EventHandle;

  /**
   * Unsubscribe from a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  off<T extends keyof IXrServiceEvents>(
    event: T,
    listener: IXrServiceEvents[T]
  ): pc.EventHandler;

  /**
   * Send a specific event.
   * @param event - Event name
   * @param [args] - Event parameters
   */
  fire<T extends keyof IXrServiceEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler;
}

export interface IXrServiceEvents {
  /**
   * Triggered when VIVERSE VR system is ready.
   */
  'vr:ready': () => void;

  /**
   * Triggered when an {@link IXrController|XrController}'s `XrInputSource` is added.
   * The handler receives the {@link IXrController|XrController} associated with the added `XrInputSource`.
   */
  'controller:addInput': (controller: IXrController) => void;

  /**
   * Triggered when an {@link IXrController|XrController}'s `XrInputSource` is removed.
   * The handler receives the {@link IXrController|XrController} associated with the removed `XrInputSource`.
   */
  'controller:removeInput': (controller: IXrController) => void;
}
