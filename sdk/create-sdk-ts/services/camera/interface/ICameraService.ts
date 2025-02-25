import * as pc from 'playcanvas';
import * as CameraTypes from '../enums/camera';

/**
 * Define the interface of CameraService.
 */
export interface ICameraService {
  /**
   * Retrieve the current active camera.
   */
  readonly activeCamera: pc.Entity | null;

  /**
   * @planned Retrieve the activation status of the Camera that was uploaded by the user.
   */
  readonly isUsingExternalCamera: boolean;

  /**
   * Retrieve the current camera's point of view.
   */
  readonly pov: CameraTypes.PovTypes;

  /**
   * @planned Control whether the VIVERSE CREATE Camera can zoom or not.
   */
  canZoom: boolean;

  /**
   * Control whether the camera's point of view can switch or not.
   */
  canSwitchPov: boolean;

  /**
   * Control the minimum distance between the VIVERSE CREATE third-person camera and the player.
   * @type {number}
   */
  minZoomDistance: number;

  /**
   * Control the maximum distance between the VIVERSE CREATE third-person camera and the player.
   * @type {number}
   */
  maxZoomDistance: number;

  /**
   * Switch the perspective to the provided camera.<br>
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
   * Remove the layer from the default camera in VIVERSE CREATE.
   * @param {pc.Entity | undefined} layerId - Layer ID
   */
  removeLayer(layerId: number): void;

  /**
   * Switch the point of view of the camera.
   * @param {CameraTypes.PovTypes} pov - Point of view type
   */
  switchPov(pov: CameraTypes.PovTypes): void;
}
