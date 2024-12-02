import {ICameraService} from './interface/ICameraService';

class CameraService implements ICameraService {
  private static _instance?: CameraService;
  isLockCameraZoomDistance = false;
  minZoomDistance = 0;
  maxZoomDistance = 0;

  constructor() {
    if (CameraService._instance) return CameraService._instance;
    CameraService._instance = this;
  }

  get activeCamera(): pc.Entity | null {
    return null;
  }

  get isUsingExternalCamera(): boolean {
    return false;
  }

  switchCamera(camera?: pc.Entity): void {}

  addLayer(layerId: string, order?: number): void {}

  removeLayer(layerId: string): void {}
}

export default CameraService;
