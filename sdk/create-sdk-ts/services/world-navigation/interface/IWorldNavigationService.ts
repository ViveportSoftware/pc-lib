/**
 * Define WorldNavigationService interface.
 */
export interface IWorldNavigationService {
  /**
   * @private
   * @planned Current room id
   */
  readonly currentRoomId: string;

  /**
   * @private
   * @planned Current scene id
   */
  readonly currentSceneId: string;

  /**
   * @private
   * @planned Current scene name
   */
  readonly currentSceneName: string;

  /**
   * @private
   * @planned Previous room id
   */
  readonly previousRoomId: string;

  /**
   * @private
   * @planned Previous scene id
   */
  readonly previousSceneId: string;

  /**
   * @private
   * @planned Previous scene name
   */
  readonly previousSceneName: string;

  /**
   * @private
   * @planned
   * @description Get the room configuration.
   * @param {string} roomId - The id of the room.
   * @returns {Promise<{roomId: string; preload: boolean; sceneList: { sceneId: string; sceneName: string;}[]} | null>} - The configuration of the room. If the room is not found, the promise will return null.
   */
  getRoomConfig(roomId: string): Promise<{
    roomId: string;
    preload: boolean;
    sceneList: {
      sceneId: string;
      sceneName: string;
    }[];
  } | null>;

  /**
   * @private
   * @planned
   * @description Preload the room.
   * @param {string} roomId - The id of the room.
   * @param {function} onProgressing - Callback function triggered when the room is loading. Useful for displaying a loading progress.
   * @returns {Promise<void>}
   */
  loadRoom(roomId: string, onProgressing: () => {}): Promise<void>;

  /**
   * @private
   * @planned
   * @description Switch to a new scene.
   * @param {string} sceneName - The name of the scene.
   * @param {object} [options] - Optional parameters.
   * @param {boolean} [options.switchChannel=true] - Whether to switch the channel. Default is true.
   * @param {boolean} [options.roomId] - The id of the room. If not provided, the current room will be used.
   * @param {function} [options.onComplete] - Callback function triggered when the scene is switched.
   * @returns {Promise<void>}
   */
  switchScene(
    sceneName: string,
    options?: {switchChannel: boolean; roomId: string; onComplete: () => {}}
  ): Promise<void>;

  /**
   * @private
   * @planned
   * @description Create a portal to another scene.
   * @param {string} sceneName - The name of the scene.
   * @param {object} [options] - Optional parameters.
   * @param {object} [options.roomId] - The id of the room. If not provided, the current room will be used.
   * @param {object} [options.size] - Control the size of the default portal.
   * @param {number} [options.size.width] - The width of the portal.
   * @param {number} [options.size.height] - The height of the portal.
   * @param {string} [options.targetEntity] - Render target entity. If not provided, the portal will be rendered wuth the default camera.
   * @param {string} [options.skipEffectEntities] - Skip effect entities. This parameter allows you to adjust the affected range of the portal layer when a custom portal model is provided via targetEntity.
   * @returns {Promise<pc.Entity | null>}
   */
  createPortal(
    sceneName: string,
    options?: {
      roomId?: string;
      size?: {width: number; height: number};
      targetEntity?: pc.Entity;
      skipEffectEntities?: pc.Entity[];
    }
  ): Promise<pc.Entity | null>;

  /**
   * @private
   * @planned
   * @description Close the portal and remove it from the scene.
   * @param {string} sceneName - The name of the scene.
   * @param {string} [roomId] - The id of the room. If not provided, the current room will be used.
   * @returns {void}
   */
  closePortal(sceneName: string, roomId?: string): void;
}
