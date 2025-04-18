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

  getRoomConfig(roomId: string) {
    return null;
  }

  loadRoom(roomId: string, progressingCallback: () => {}) {}

  switchScene(
    sceneId: string,
    options?: {switchChannel: boolean; callback: () => {}}
  ) {}

  createPortal(
    sceneId: string,
    options?: {
      size?: {width: number; height: number};
      targetEntity?: pc.Entity;
      skipEffectEntities?: pc.Entity[];
    }
  ) {
    return null;
  }

  closePortal(sceneId: string) {}
}

export default WorldNavigationService;
