import * as pc from 'playcanvas';

/**
 * 定義 CameraService 介面
 */
export interface ICameraService {
  /**
   * 取得目前啟用的 Camera
   */
  readonly activeCamera: pc.Entity | null;

  /**
   * 取得自行上傳的 Camera 啟用狀態
   */
  readonly isUsingExternalCamera: boolean;

  /**
   * 控制 Viverse Create Camera 是否能進行縮放
   */
  isLockCameraZoomDistance: boolean;

  /**
   * 控制 Viverse Create Camera 第三人稱視角相機與 Player 之間的最小距離
   * @type {number}
   */
  minZoomDistance: number;

  /**
   * 控制 Viverse Create Camera 第三人稱視角相機與 Player 之間的最大距離
   * @type {number}
   */
  maxZoomDistance: number;

  /**
   * 將視角切換成傳入的 camera<br>
   * 若沒傳入 camera，則恢復到 Viverse Create 內建的預設相機機制
   * @param {pc.Entity | undefined} [camera] - 相機 Entity，此 Entity 必須包含 pc.CameraComponent
   */
  switchCamera(camera?: pc.Entity): void;

  /**
   * 將 layer 新增到 Viverse Create 內建的預設相機
   * @param {string} layerId - Layer ID
   * @param {number | undefined} [order] - Layer 排序，預設排至最後
   */
  addLayer(layerId: number, order?: number): void;

  /**
   * 將 layer 從 Viverse Create 內建的預設相機中移除
   * @param {pc.Entity | undefined} layerId - Layer ID
   */
  removeLayer(layerId: number): void;
}
