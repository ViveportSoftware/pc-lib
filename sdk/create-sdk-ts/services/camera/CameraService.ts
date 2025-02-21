import {ICameraService} from './interface/ICameraService';
import * as CameraTypes from './enums/camera';

class CameraService implements ICameraService {
  private static _instance?: CameraService;
  canZoom = true;
  canRotate = true;
  minZoomDistance = 0;
  maxZoomDistance = 0;
  canSwitchPov = true;
  pov = CameraTypes.PovTypes.ThirdPerson;

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

  addLayer(layerId: number, order?: number): void {}

  removeLayer(layerId: number): void {}

  switchPov(pov: CameraTypes.PovTypes): void {}
}

export default CameraService;
