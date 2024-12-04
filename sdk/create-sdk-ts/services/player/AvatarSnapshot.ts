import {IAvatarSnapshot} from './interface/IAvatarSnapshot';

type AvatarSnapshotData = IAvatarSnapshot;

class AvatarSnapshot implements IAvatarSnapshot {
  #head: string;
  #fullBody: string;

  constructor(data: AvatarSnapshotData) {
    const {head, fullBody} = data;

    this.#head = head;
    this.#fullBody = fullBody;
  }

  /**
   * @type {string}
   */
  get head(): string {
    return this.#head;
  }

  /**
   * @type {string}
   */
  get fullBody(): string {
    return this.#fullBody;
  }
}

export default AvatarSnapshot;
