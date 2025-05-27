/**
 * Define WorldNavigationService interface.
 */
export interface IWorldNavigationService {
  /**
   * @private
   * @planned Current world id
   */
  readonly currentWorldId: string;

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
   * @planned Previous world id
   */
  readonly previousWorldId: string;

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
   * @description Get the world configuration.
   * @param {string} worldId - The id of the world.
   * @returns {Promise<{worldId: string; preload: boolean; sceneList: { sceneId: string; sceneName: string;}[]} | null>} - The configuration of the world. If the world is not found, the promise will return null.
   */
  getWorldConfig(worldId: string): Promise<{
    worldId: string;
    preload: boolean;
    sceneList: {
      id: string;
      name: string;
      url: string;
    }[];
  } | null>;

  /**
   * @private
   * @planned
   * @description Preload the world.
   * @param {string} worldId - The id of the world.
   * @param {function} onProgressing - Callback function triggered when the world is loading. Useful for displaying a loading progress.
   * @returns {Promise<void>}
   */
  loadWorld(worldId: string, onProgressing: () => {}): Promise<void>;

  /**
   * @private
   * @planned
   * @description Switch to a new scene.
   * @param {string} sceneName - The name of the scene.
   * @param {object} [options] - Optional parameters.
   * @param {boolean} [options.switchChannel=true] - Whether to switch the channel. Default is true.
   * @param {boolean} [options.worldId] - The id of the world. If not provided, the current world will be used.
   * @param {function} [options.onComplete] - Callback function triggered when the scene is switched.
   * @returns {Promise<void>}
   */
  switchScene(
    sceneName: string,
    options?: {switchChannel: boolean; worldId: string; onComplete: () => {}}
  ): Promise<void>;

  /**
   * @private
   * @planned
   * @description Create a portal to another scene.
   * @param {string} sceneName - The name of the scene.
   * @param {object} [options] - Optional parameters.
   * @param {object} [options.worldId] - The id of the world. If not provided, the current world will be used.
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
      worldId?: string;
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
   * @param {string} [worldId] - The id of the world. If not provided, the current world will be used.
   * @returns {void}
   */
  closePortal(sceneName: string, worldId?: string): void;
}
