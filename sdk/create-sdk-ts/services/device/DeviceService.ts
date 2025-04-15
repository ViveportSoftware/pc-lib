import {IDeviceService} from './interface/IDeviceService';
import * as DeviceTypes from './enums/device';

class DeviceService implements IDeviceService {
  private static _instance?: DeviceService;
  hardware = DeviceTypes.HardwareType.Unknown;
  os = DeviceTypes.OsType.Unknown;
  vrDevice: DeviceTypes.VrDeviceType | null = null;

  constructor() {
    if (DeviceService._instance) return DeviceService._instance;
    DeviceService._instance = this;
  }
}

export default DeviceService;
