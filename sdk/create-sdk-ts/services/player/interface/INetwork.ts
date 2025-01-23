import * as pc from 'playcanvas';
import {EventHandlerMethods} from '../../../types';

/**
 * Define Network interface.
 */
export interface INetwork extends EventHandlerMethods {
  /**
   * Get player's network session ID.
   */
  readonly id: string;

  /**
   * Subscribe to a specific event.
   * @param event - Event name
   * @param listener - Callback function
   */
  on<T extends keyof INetworkEvents>(
    event: T,
    listener: INetworkEvents[T]
  ): pc.EventHandle;

  /**
   * Unsubscribe from a specific event.
   * @param event - Event name
   * @param listener - Callback function
   */
  off<T extends keyof INetworkEvents>(
    event: T,
    listener: INetworkEvents[T]
  ): pc.EventHandler;

  /**
   * Send a specific event.
   * @param event - Event name
   * @param [args] - Event parameters
   */
  fire<T extends keyof INetworkEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler;
}

/**
 * Define events supported by IPlayer and their corresponding parameters.
 */
export interface INetworkEvents {
  /**
   * @planned Triggered when the player successfully connects and joins the session.
   */
  joined: () => void;

  /**
   * @planned Triggered when the player disconnects or leaves the session.
   */
  left: () => void;
}
