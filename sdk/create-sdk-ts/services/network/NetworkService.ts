import {
  IGameUpdateParams,
  INetworkService,
  INetworkServiceEvents,
} from './interface/INetworkService';

class NetworkService implements INetworkService {
  private static _instance?: NetworkService;
  moveSyncInterval = 150;
  masterId = '';
  playerIdMap = {};
  _gameId = '';

  constructor() {
    if (NetworkService._instance) return NetworkService._instance;
    NetworkService._instance = this;
  }

  sendMessage<T = Record<string, unknown>>(
    message: T,
    options?: {
      batch?: boolean;
      messageId?: string;
      entityId?: string;
    }
  ): string {
    return '';
  }

  generateMessageId(): string {
    return '';
  }

  sendGameStart() {}

  sendGameEnd() {}

  sendOwnerUpdate(event: string, targetId: string) {}

  _sendGameUpdate(params: IGameUpdateParams) {}

  on<T extends keyof INetworkServiceEvents>(
    event: T,
    listener: INetworkServiceEvents[T]
  ): pc.EventHandle {
    return {} as pc.EventHandle;
  }

  off<T extends keyof INetworkServiceEvents>(
    event: T,
    listener: INetworkServiceEvents[T]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }
}

export default NetworkService;
