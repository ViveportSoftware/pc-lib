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
   *  Retrieve the current perspective view.
   */
  readonly perspective: CameraTypes.PerspectiveTypes;

  /**
   * @planned Control whether the VIVERSE CREATE Camera can zoom or not.
   */
  canZoom: boolean;

  /**
   *  Control whether the perspective view can switch or not.
   */
  canSwitchPerspective: boolean;

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
   * Switch the perspective view of the camera.
   * @param {CameraTypes.PerspectiveTypes} perspective - Perspective view type
   */
  switchPerspective(perspective: CameraTypes.PerspectiveTypes): void;
}
