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
export {CameraService, ICameraService, CameraTypes} from './services/camera';
export {DeviceService, IDeviceService, DeviceTypes} from './services/device';
export {
  EnvironmentService,
  IEnvironmentService,
  EnvironmentTypes,
} from './services/environment';
export {
  IPlayerProfile,
  IAvatarTransform,
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
  IPlayerServiceEvents,
  AvatarTypes,
  NameTagTypes,
  MoveTypes,
} from './services/player';
export {
  NetworkService,
  INetworkService,
  IMessage,
  ITriggerMessage,
  IOwnerUpdateMessage,
  INetworkServiceEvents,
} from './services/network';
export {
  XrService,
  IXrService,
  IXrServiceEvents,
  IXrController,
  IXrControllerEvents,
  XrTypes,
} from './services/xr';
export {
  QuestService,
  IQuestService,
  IQuestServiceEvents,
  IQuest,
  IQuestEvents,
  ITask,
  ITaskEvents,
  ICheckTask,
  IProgressBarTask,
  IProgressBarTaskEvents,
  TaskTypes,
} from './services/quest';
