/**
 * @internal
 */
import {content} from './template';
/**
 * @internal
 */
export const toTemplateLiteral = () => {
  return content;
};

export {version} from './metadata';
export {CameraService, ICameraService} from './services/camera';
export {
  EnvironmentService,
  IEnvironmentService,
  EnvironmentTypes,
} from './services/environment';
export {
  IPlayerTransform,
  IPlayerProfile,
  IAvatarSnapshot,
  IAvatar,
  ILocalPlayer,
  INameTag,
  INetwork,
  IPlayer,
  IPlayerService,
  IRemotePlayer,
  IAvatarEvents,
  ILocalPlayerEvents,
  INetworkEvents,
  IPlayerEvents,
  PlayerService,
  AvatarTypes,
  NameTagTypes,
} from './services/player';
