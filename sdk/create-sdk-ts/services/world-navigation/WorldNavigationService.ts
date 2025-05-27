import {IWorldNavigationService} from './interface/IWorldNavigationService';

class WorldNavigationService implements IWorldNavigationService {
  private static _instance?: WorldNavigationService;

  constructor() {
    if (WorldNavigationService._instance)
      return WorldNavigationService._instance;
    WorldNavigationService._instance = this;
  }

  get currentWorldId(): string {
    return '';
  }

  get currentSceneId(): string {
    return '';
  }

  get currentSceneName(): string {
    return '';
  }

  get previousWorldId(): string {
    return '';
  }

  get previousSceneId(): string {
    return '';
  }

  get previousSceneName(): string {
    return '';
  }

  getWorldConfig(worldId: string): Promise<{
    worldId: string;
    preload: boolean;
    sceneList: {id: string; name: string; url: string}[];
  } | null> {
    return Promise.resolve(null);
  }

  loadWorld(worldId: string, onProgressing: () => {}): Promise<void> {
    return Promise.resolve();
  }

  switchScene(
    sceneName: string,
    options?: {switchChannel: boolean; worldId: string; onComplete: () => {}}
  ): Promise<void> {
    return Promise.resolve();
  }

  createPortal(
    sceneName: string,
    options?: {
      worldId?: string;
      size?: {width: number; height: number};
      targetEntity?: pc.Entity;
      skipEffectEntities?: pc.Entity[];
    }
  ): Promise<pc.Entity | null> {
    return Promise.resolve(null);
  }

  closePortal(sceneName: string, worldId?: string): void {
    return;
  }
}

export default WorldNavigationService;
