/**
 * @class
 */
class CameraService {
  /**
   * @readonly
   * @type {CameraService}
  */
  static instance;

  /**
   * 取得目前啟用的 Camera
   * @readonly
   * @type {pc.Entity}
  */
  activeCamera;

  /**
   * 取得自行上傳的 Camera 啟用狀態
   * @readonly
   * @type {boolean}
  */
  isUsingExternalCamera

  /**
   * 控制 Viverse Create Camera 是否能進行縮放
   * @type {boolean}
  */
  isLockCameraZoomDistance

  /**
   * 控制 Viverse Create Camera 第三人稱視角相機與 Player 之間的距離
   * @type {number}
  */
  zoomDistance

  constructor(){
      return CameraService.instance;
  }

  /**
   * 將視角切換成傳入的 camera<br>
   * 若沒傳入 camera，則恢復到 Viverse Create 內建的預設相機機制
   * @memberof CameraService
   * @param {pc.Entity} [camera] - 相機 Entity，此 Entity 必須包含 pc.CameraComponent
   */
  switchCamera(camera = null){
      throw new Error("Please implement switchCamera() method.");
  }
}

export default CameraService;
