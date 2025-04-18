import * as pc from 'playcanvas';

export interface INetworkService extends IBotService {
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
    data: T,
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

export interface INetworkServiceEvents extends IBotGameEvents, IBotOwnerEvents {
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

  /**
   * Triggered when a trigger message is received.
   * @param triggerMessage - Trigger message
   * @returns
   */
  'receive:trigger': (triggerMessage: ITriggerMessage) => void;
}

interface IBotService {
  /**
   * @private
   * Define game ID, used to identify the game.
   */
  _gameId: string;

  /**
   * @private
   * @planned One player will be selected as the master.
   */
  readonly masterId: string;

  /**
   * @private
   * @planned Provide the IDs of all players and sort them.
   */
  readonly playerIdMap: {[index: number]: string};

  /**
   * @private
   * @planned Trigger game start, begin countdown.
   */
  sendGameStart(): void;

  /**
   * @private
   * @planned Trigger game end early if conditions are met within the countdown.
   */
  sendGameEnd(): void;

  /**
   * @private
   * @planned
   * @param event - Event name, can be customized as needed.
   * @param targetId  - Specified target ID, can be customized as needed.
   *  Specify a specific event and targetId, and let the server decide who is the owner (whoever sends the message first).
   *
   * @example
   *
   * // targetId is the entity ID.
   *
   * // Player A sends take-ownership event.
   * sendOwnerUpdate('take-ownership', 'f47ac10b-58cb-11d1-a5f3-0000f8751022');
   *
   * // Player B sends take-ownership event.
   * sendOwnerUpdate('take-ownership', 'f47ac10b-58cb-11d1-a5f3-0000f8751022');
   *
   * // Server decides Player A is the owner.
   * // Notify all players that Player A is the owner.
   *
   * networkService.on('receive:ownerUpdate', (params) => {
   *    if (params.event === 'take-ownership') {
   *      // Player A is the owner, successor is Player A's ID.
   *    }
   * })
   *
   */
  sendOwnerUpdate(event: string, targetId: string): void;

  /**
   * Send game settings update.
   * @private
   * @param params - 	Game parameters.
   * @param {integer} [params.totalPlayer] - Total number of players.
   * @param {integer} [params.readyTime] - Game countdown time.
   * @param {integer} [params.playTime] - Game duration.
   * @param {integer} [params.countdownInterval] - Countdown interval.
   * @param {number} [params.startDelayTime] - Delay between countdown end and game start.
   * @returns
   *
   */
  _sendGameUpdate(params: IGameUpdateParams): void;
}

interface IBotGameEvents {
  /**
   * @private
   * @planned
   * @param masterId - Notify which player is the master of the room.
   * @returns
   */
  'game:masterNotify': (masterId: string) => void;

  /**
   * @private
   * @planned Trigger when a player joins the game, notify all players to wait for others.
   * @param playerIdMap - Provide the IDs of all players and sort them.
   * @returns
   */
  'game:waitForPlayer': (playerIdMap: {[index: number]: string}) => void;

  /**
   * @private
   * @planned Once the player count condition is met, notify all players that the game can start.
   * @param playerIdMap - Provide the IDs of all players and sort them.
   * @returns
   */
  'game:allPlayerReady': (playerIdMap: {[index: number]: string}) => void;

  /**
   * @private
   * @planned Trigger game start, begin countdown (currently only sends once).
   * @param second - Game countdown time.
   * @returns
   */
  'game:countdown': (second: number) => void;

  /**
   * @private
   * @planned Game countdown during the game, sent at specified intervals.
   * @param second - Game duration.
   */
  'game:timer': (second: number) => void;

  /**
   * @private
   * @planned Game ends when the game time is up.
   * @returns
   */
  'game:timeUp': () => void;

  /**
   * @private
   * @planned Game ends when conditions are met.
   * @returns
   */
  'game:end': () => void;
}

export interface IGameUpdateParams {
  /**
   * Total number of players, must be an integer.
   * @type {integer}
   */
  totalPlayer?: number;
  /**
   * Game countdown time, must be an integer.
   * @type {integer}
   */
  readyTime?: number;
  /**
   * Game duration, must be an integer.
   * @type {integer}
   */
  playTime?: number;
  /**
   * Countdown interval, must be an integer.
   * @type {integer}
   */
  countdownInterval?: number;
  /**
   * Delay between countdown end and game start.
   * @type {number}
   */
  startDelayTime?: number;
}

export interface IOwnerUpdateMessage {
  /**
   * Event name, can be customized as needed.
   * @type {string}
   */
  event: string;

  /**
   * Specified target ID, can be customized as needed.
   * @type {string}
   */
  targetId: string;

  /**
   * Player ID of the one who is the owner.
   * @type {string}
   */
  successor: string;

  /**
   * Update timestamp.
   * @type {number}
   */
  updateTime: number;
}

interface IBotOwnerEvents {
  /**
   * @private
   * @planned Triggered when owner update is received.
   * @param {IOwnerUpdateMessage} updateMessage - Event parameters, including event name, target ID, successful player, etc.
   * @returns
   */
  'receive:ownerUpdate': (updateMessage: IOwnerUpdateMessage) => void;
}
