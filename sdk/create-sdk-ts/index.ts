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
  IControlledPlayer,
  INameTag,
  INetwork,
  IPlayer,
  IPlayerService,
  ISyncedPlayer,
  IAvatarEvents,
  IControlledPlayerEvents,
  INetworkEvents,
  IPlayerEvents,
  PlayerService,
  AvatarTypes,
  NameTagTypes,
} from './services/player';
