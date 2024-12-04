import {IPlayer, IPlayerEvents} from './interface/IPlayer';
import Network from './Network';
import NameTag from './NameTag';
import Avatar from './Avatar';
import PlayerProfile from './PlayerProfile';

class Player implements IPlayer {
  isVisible: boolean;

  constructor() {
    this.isVisible = true;
  }

  get displayName(): string {
    return '';
  }

  get isDisposed(): boolean {
    return false;
  }

  /**
   * @type {Avatar | undefined}
   */
  get avatar(): Avatar | undefined {
    return undefined;
  }

  /**
   * @type {Network | undefined}
   */
  get network(): Network | undefined {
    return undefined;
  }

  /**
   * @type {NameTag | undefined}
   */
  get nameTag(): NameTag | undefined {
    return undefined;
  }

  /**
   * @type {PlayerProfile | undefined}
   */
  get profile(): PlayerProfile | undefined {
    return undefined;
  }

  get entity(): pc.Entity | undefined {
    return undefined;
  }

  on<T extends keyof IPlayerEvents>(
    event: T,
    listener: IPlayerEvents[T]
  ): pc.EventHandle {
    return {} as pc.EventHandle;
  }

  off<T extends keyof IPlayerEvents>(
    event: T,
    listener: IPlayerEvents[T]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }

  fire<T extends keyof IPlayerEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }
}

export default Player;
