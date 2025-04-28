import * as DeviceTypes from '../enums/device';

/**
 * Define DeviceService interface.
 */
export interface IDeviceService {
  /**
   * Retrieve the hardware type of the current device.
   * NOTE: HardwareType is determined by the user agent string and may not be accurate.
   */
  readonly hardware: DeviceTypes.HardwareType;

  /**
   * Retrieve the current operating system.
   * NOTE: OsType is determined by the user agent string and may not be accurate.
   */
  readonly os: DeviceTypes.OsType;

  /**
   * Retrieve the current VR device. If the hardware is not {@link DeviceTypes.HardwareType.Headset|Headset}, this will be null.
   * NOTE: VrDeviceType is determined by the user agent string and may not be accurate.
   */
  readonly vrDevice: DeviceTypes.VrDeviceType | null;
}
