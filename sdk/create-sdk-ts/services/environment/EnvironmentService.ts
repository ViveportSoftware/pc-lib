import {IEnvironmentService} from './interface/IEnvironmentService';
import * as EnvironmentTypes from './enums/environment';

class EnvironmentService implements IEnvironmentService {
  private static _instance?: EnvironmentService;
  flyMode = EnvironmentTypes.FlyModeTypes.Auto;
  impostorMode = EnvironmentTypes.ImpostorModeTypes.Auto;

  constructor() {
    if (EnvironmentService._instance) return EnvironmentService._instance;
    EnvironmentService._instance = this;
  }
}

export default EnvironmentService;
