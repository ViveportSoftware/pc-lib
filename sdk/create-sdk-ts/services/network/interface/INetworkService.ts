import * as pc from 'playcanvas';

export interface INetworkService {
  /**
   * Synchronization frequency of player's movement.
   * Default value is 150ms, the configurable range is 30ms to 150ms.
   */
  moveSyncInterval: number;

  /**
   * Send custom message.
   * @param {Record<string, any>} message - Custom message content.
   * @param {Object} [options] - Other options.
   * @param {boolean} [options.batch=true] - Batch processing of messages: If set to `true`, the messages will be cached and sent together later.
   * @param {string} [options.messageId] - Message ID: Used to override messages with the same ID that have not been sent yet.
   * @param {string} [options.entityId] - Entity GUID: Specifies the entity that can receive the message through the receive:message event.
   * @returns {string} - Message ID.
   */
  sendMessage<T = Record<string, unknown>>(
    message: T,
    options?: {
      batch?: boolean;
      messageId?: string;
      entityId?: string;
    }
  ): string;

  /**
   * Generate a message ID.
   */
  generateMessageId(): string;

  // sendBotMessage (TBD)

  /**
   * Subscribe to a specific event.
   * @param event - Event name
   * @param listener - Callback function
   */
  on<T extends keyof INetworkServiceEvents>(
    event: T,
    listener: INetworkServiceEvents[T]
  ): pc.EventHandle;

  /**
   * Unsubscribe from a specific event.
   * @param event - Event name
   * @param listener - Callback function
   */
  off<T extends keyof INetworkServiceEvents>(
    event: T,
    listener: INetworkServiceEvents[T]
  ): pc.EventHandler;
}

export interface IMessage<T = Record<string, unknown>> {
  playerId: string;
  messageId: string;
  entityId?: string;
  data: T;
}

export interface ITriggerMessage {
  playerId: string;
  entityId?: string | null;
  type?: number | null;
}

export interface INetworkServiceEvents {
  /**
   * Triggered when the game successfully connects.
   * @returns
   */
  connected: () => void;

  /**
   * Triggered when the game fails to connect.
   * @returns
   */
  error: () => void;

  /**
   * Triggered when a custom message is received.
   * @param messages - Custom message
   * @returns
   */
  'receive:messages': (messages: IMessage[]) => void;

  // 'receive:botMessages' (TBD)

  /**
   * Triggered when a trigger message is received.
   * @param triggerMessage - Trigger message
   * @returns
   */
  'receive:trigger': (triggerMessage: ITriggerMessage) => void;
}
