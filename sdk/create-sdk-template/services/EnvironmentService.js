/**
 * @class
 */
class EnvironmentService {
  /**
   * @readonly
   * @type {EnvironmentService}
  */
  static instance;

  /**
   * 改變飛行模式
   * @type {CreateExtensionsSDK.Environment.FlyModeTypes}
  */
 flyMode;

 /**
   * 改變 Impostor 模式
   * @type {CreateExtensionsSDK.Environment.ImpostorModeTypes}
  */
 impostorMode;

  constructor(){
      return EnvironmentService.instance;
  }

}

export default EnvironmentService;
