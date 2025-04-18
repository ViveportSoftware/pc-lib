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
   * @planned
   * @description Get the room configuration.
   * @param {string} roomId - The id of the room.
   * @returns {Object | null} The configuration of the room.
   * @returns {string} return.roomId - The unique identifier of the room.
   * @returns {boolean} return.preload - Indicates whether the room should be preloaded.
   * @returns {Object[]} return.sceneList - A list of scenes associated with the room.
   * @returns {string} return.sceneList[].sceneId - The unique identifier of the scene.
   * @returns {string} return.sceneList[].sceneName - The name of the scene.
   */
  getRoomConfig(roomId: string): {
    roomId: string;
    preload: boolean;
    sceneList: {
      sceneId: string;
      sceneName: string;
    }[];
  } | null;

  /**
   * @private
   * @planned
   * @description Preload the room.
   * @param {string} roomId - The id of the room.
   * @param {function} progressingCallback - Callback function triggered when the room is loading. Useful for displaying a loading progress.
   */
  loadRoom(roomId: string, progressingCallback: () => {}): void;

  /**
   * @private
   * @planned
   * @description Switch to a new scene.
   * @param {string} sceneId - The id of the scene.
   * @param {object} [options] - Optional parameters.
   * @param {boolean} [options.switchChannel=true] - Whether to switch the channel. Default is true.
   * @param {function} [options.callback] - Callback function triggered when the scene is switched.
   */
  switchScene(
    sceneId: string,
    options?: {switchChannel: boolean; callback: () => {}}
  ): void;

  /**
   * @private
   * @planned
   * @description Create a portal to another scene.
   * @param {string} sceneId
   * @param {object} [options] - Optional parameters.
   * @param {object} [options.size] - Control the size of the default portal.
   * @param {number} [options.size.width] - The width of the portal.
   * @param {number} [options.size.height] - The height of the portal.
   * @param {string} [options.targetEntity] - Render target entity. If not provided, the portal will be rendered wuth the default camera.
   * @param {string} [options.skipEffectEntities] - Skip effect entities. This parameter allows you to adjust the affected range of the portal layer when a custom portal model is provided via targetEntity.
   *
   * @returns {pc.Entity | null}
   */
  createPortal(
    sceneId: string,
    options?: {
      size?: {width: number; height: number};
      targetEntity?: pc.Entity;
      skipEffectEntities?: pc.Entity[];
    }
  ): pc.Entity | null;

  /**
   * @private
   * @planned
   * @description Close the portal and remove it from the scene.
   * @param {string} sceneId - The id of the scene.
   */
  closePortal(sceneId: string): void;
}
