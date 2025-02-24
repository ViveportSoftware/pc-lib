import * as pc from 'playcanvas';
import {IXrHandControllerBase} from './IXrHandControllerBase';
import {EventHandlerMethods} from '../../../types';

/**
 * Define the interface of XrController.
 */
export interface IXrController extends IXrHandControllerBase {
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
   * @planned Triggered when xr controller is added.
   */
  'xrController:add': (inputSource: pc.XrInputSource) => void;

  /**
   * @planned Triggered when xr controller is removed.
   */
  'xrController:remove': (inputSource: pc.XrInputSource) => void;
}
