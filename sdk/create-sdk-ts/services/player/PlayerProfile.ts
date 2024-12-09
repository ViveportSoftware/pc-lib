import {IPlayerProfile} from './interface/IPlayerProfile';

type PlayerProfileData = IPlayerProfile;

class PlayerProfile implements IPlayerProfile {
  #displayName: string;
  #snapshot: {
    head: string;
    fullBody: string;
  };
  #userId: string;
  #userName: string;

  constructor(data: PlayerProfileData) {
    const {displayName, snapshot, userId, userName} = data;

    this.#displayName = displayName;
    this.#snapshot = snapshot;
    this.#userId = userId;
    this.#userName = userName;
  }

  /**
   * @type {string}
   */
  get displayName(): string {
    return this.#displayName;
  }

  /**
   * @type {object}
   * @property {string} head
   * @property {string} fullBody
   */
  get snapshot(): {
    head: string;
    fullBody: string;
  } {
    return this.#snapshot;
  }

  /**
   * @type {string}
   */
  get userId(): string {
    return this.#userId;
  }

  /**
   * @type {string}
   */
  get userName(): string {
    return this.#userName;
  }
}

export default PlayerProfile;
