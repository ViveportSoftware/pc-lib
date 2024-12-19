import {IEnvironmentService} from './interface/IEnvironmentService';
import * as EnvironmentTypes from './enums/environment';

class EnvironmentService implements IEnvironmentService {
  private static _instance?: EnvironmentService;
  impostorMode = EnvironmentTypes.ImpostorModeTypes.Auto;
  canPlayersCollide = true;

  constructor() {
    if (EnvironmentService._instance) return EnvironmentService._instance;
    EnvironmentService._instance = this;
  }
}

export default EnvironmentService;
