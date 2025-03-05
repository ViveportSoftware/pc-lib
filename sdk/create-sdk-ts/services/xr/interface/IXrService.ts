import {EventHandlerMethods} from '../../../types';
import {IXrController} from './IXrController';

/**
 * Define XrService interface.
 */
export interface IXrService extends EventHandlerMethods {
  /**
   * @planned Gets {@link IXrController|XrController} information.
   */
  readonly controllers: {left?: IXrController; right?: IXrController};

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
   * @planned Triggered when an {@link IXrController|XrController}'s `XrInputSource` is added.
   * The handler receives the {@link IXrController|XrController} associated with the added `XrInputSource`.
   */
  'controller:addInput': (controller: IXrController) => void;

  /**
   * @planned Triggered when an {@link IXrController|XrController}'s `XrInputSource` is removed.
   * The handler receives the {@link IXrController|XrController} associated with the removed `XrInputSource`.
   */
  'controller:removeInput': (controller: IXrController) => void;
}
