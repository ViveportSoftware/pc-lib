import {IWorldNavigationService} from './interface/IWorldNavigationService';

class WorldNavigationService implements IWorldNavigationService {
  private static _instance?: WorldNavigationService;

  constructor() {
    if (WorldNavigationService._instance)
      return WorldNavigationService._instance;
    WorldNavigationService._instance = this;
  }

  get currentRoomId(): string {
    return '';
  }

  get currentSceneId(): string {
    return '';
  }

  get previousRoomId(): string {
    return '';
  }

  get previousSceneId(): string {
    return '';
  }

  getRoomConfig(roomId: string): Promise<{
    roomId: string;
    preload: boolean;
    sceneList: {sceneId: string; sceneName: string}[];
  } | null> {
    return Promise.resolve(null);
  }

  loadRoom(roomId: string, onProgressing: () => {}): Promise<void> {
    return Promise.resolve();
  }

  switchScene(
    sceneName: string,
    roomId?: string,
    options?: {switchChannel: boolean; onComplete: () => {}}
  ): Promise<void> {
    return Promise.resolve();
  }

  createPortal(
    sceneName: string,
    roomId?: string,
    options?: {
      size?: {width: number; height: number};
      targetEntity?: pc.Entity;
      skipEffectEntities?: pc.Entity[];
    }
  ): Promise<pc.Entity | null> {
    return Promise.resolve(null);
  }

  closePortal(sceneName: string, roomId?: string): void {
    return;
  }
}

export default WorldNavigationService;
