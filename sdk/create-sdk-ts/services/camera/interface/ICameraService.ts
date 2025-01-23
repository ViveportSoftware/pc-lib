import * as pc from 'playcanvas';

/**
 * Define the interface of CameraService.
 */
export interface ICameraService {
  /**
   * @beta Retrieve the current active camera.
   */
  readonly activeCamera: pc.Entity | null;

  /**
   * Retrieve the activation status of the Camera that was uploaded by the user.
   */
  readonly isUsingExternalCamera: boolean;

  /**
   * Control whether the VIVERSE CREATE Camera can zoom or not.
   */
  canZoom: boolean;

  /**
   * @beta Control the minimum distance between the VIVERSE CREATE third-person camera and the player.
   * @type {number}
   */
  minZoomDistance: number;

  /**
   * @beta Control the maximum distance between the VIVERSE CREATE third-person camera and the player.
   * @type {number}
   */
  maxZoomDistance: number;

  /**
   * @beta Switch the perspective to the provided camera.<br>
   * If no camera is provided, revert to the default camera mechanism in VIVERSE CREATE.
   * @param {pc.Entity | undefined} [camera] - This Entity must include the pc.CameraComponent.
   */
  switchCamera(camera?: pc.Entity): void;

  /**
   * Add the layer to the default camera in VIVERSE CREATE.
   * @param {string} layerId - Layer ID
   * @param {number | undefined} [order] - Layer sorting: By default, it will be placed last.
   */
  addLayer(layerId: number, order?: number): void;

  /**
   * @beta Remove the layer from the default camera in VIVERSE CREATE.
   * @param {pc.Entity | undefined} layerId - Layer ID
   */
  removeLayer(layerId: number): void;
}
