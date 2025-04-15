import * as DeviceTypes from '../enums/device';

/**
 * Define DeviceService interface.
 */
export interface IDeviceService {
  /**
   * @planned Retrieve the hardware type of the current device.
   * NOTE: HardwareType is determined by the user agent string and may not be accurate.
   */
  readonly hardware: DeviceTypes.HardwareType;

  /**
   * @planned Retrieve the current operating system.
   * NOTE: OsType is determined by the user agent string and may not be accurate.
   */
  readonly os: DeviceTypes.OsType;

  /**
   * @planned Retrieve the current VR device. If the hardware is not {@link DeviceTypes.Hardware.Headset|Headset}, this will be null.
   * NOTE: VrDeviceType is determined by the user agent string and may not be accurate.
   */
  readonly vrDevice: DeviceTypes.VrDeviceType | null;
}
