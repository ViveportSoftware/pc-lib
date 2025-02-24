import {EventHandlerMethods} from '../../../types';
import {IXrController} from './IXrController';

/**
 * Define XrService interface.
 */
export interface IXrService extends EventHandlerMethods {
  /**
   * @planned Get XR device input, such as controllers, hands, gaze etc.
   */
  readonly input: pc.XrInput | undefined;

  /**
   * @planned Get Viverse XR controller information.
   */
  constrollers: {left?: IXrController; right?: IXrController};

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
}

export interface IXrServiceEvents {
  /**
   * @planned Triggered when a xr controller added.
   */
  'xr:controllerAdd': (controller: IXrController) => void;

  /**
   * @planned Triggered when a xr controller removed.
   */
  'xr:controllerRemove': (controller: IXrController) => void;
}
