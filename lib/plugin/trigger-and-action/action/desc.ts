import {Type} from './type';

export const Desc = {
  [Type.Base]: {
    enabled: {
      default: true,
      desc: 'enabled',
    },
    delay: {
      default: 0,
      desc: 'delay in ms',
    },
  },
  [Type.PCAppEventPublish]: {
    stringParams: [
      {
        desc: 'notification name to publish',
      },
    ],
  },
  [Type.NotificationCenterPublish]: {
    stringParams: [
      {
        desc: 'notification name to publish',
      },
    ],
  },
  [Type.TheatreJSPlaySheet]: {
    stringParams: [
      {
        desc: 'sheet name to play',
      },
    ],
  },
  [Type.EntityRigidbodyAddForceInPhysics]: {
    numberParams: [
      {
        desc: 'x force',
      },
      {
        desc: 'y force',
      },
      {
        desc: 'z force',
      },
    ],
  },
  [Type.EntityPlayAnimation]: {
    stringParams: [
      {
        desc: 'animate state to play',
      },
    ],
    booleanParams: [
      {
        desc: 'is transition',
      },
    ],
    entityId: {
      desc: 'pick up specify execution entity (optional)',
    },
  },
  [Type.EntityFadeIn]: {
    numberParams: [
      {
        desc: 'duration in ms',
      },
    ],
  },
  [Type.EntityFadeOut]: {
    numberParams: [
      {
        desc: 'duration in ms',
      },
    ],
  },
  [Type.EntityPlaySound]: {
    stringParams: [
      {
        desc: 'sound name to play',
      },
    ],
    entityId: {
      desc: 'pick up specify execution entity',
    },
  },
  [Type.InworldNpcWaitingSpeak]: {
    inworldAutoTrigger: {
      desc: 'auto trigger',
    },
    inworldTriggerMode: {
      desc: 'goals trigger mode',
      default: 1,
    },
    stringParams: [
      {
        desc: 'trigger content',
      },
    ],
  },
  [Type.EntityEnableByTag]: {
    tagsFilter: [
      {
        desc: 'enable entity with tag',
      },
    ],
  },
  [Type.EntityDisableByTag]: {
    tagsFilter: [
      {
        desc: 'disable entity with tag',
      },
    ],
  },
  [Type.EntityEnableById]: {
    entityId: {
      desc: 'pick up specify execution entity',
    },
  },
  [Type.EntityDisableById]: {
    entityId: {
      desc: 'pick up specify execution entity',
    },
  },
  [Type.EntityCheckPoint]: {
    entityId: {
      desc: 'pick up an entity id',
    },
  },
  [Type.Quest]: {
    questIndex: {
      desc: 'selected quest',
    },
    response: {
      desc: 'response',
      default: 1,
    },
    taskIndex: {
      desc: 'selected task',
    },
  },
  [Type.EntityStopSound]: {
    stringParams: [
      {
        desc: 'sound name to stop',
      },
    ],
    entityId: {
      desc: 'pick up specify execution entity',
    },
  },
  [Type.TeleportAvatar]: {
    entityId: {
      desc: 'Specify the Entity whose location you want to teleport to',
    },
  },
  [Type.AssignUserAsset]: {
    stringParams: [
      {
        desc: 'asset id',
      },
    ],
  },
  [Type.Vote]: {
    stringParams: [
      {
        desc: 'Vote event id',
      },
      {
        desc: 'Vote candidate id',
      },
    ],
  },
};
