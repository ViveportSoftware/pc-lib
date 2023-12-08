import {Type} from './type';

export const Desc = {
  [Type.Base]: {
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
  },
  [Type.InworldNpcWaitingSpeak]: {
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
  [Type.EntityCheckPoint]: {
    entityId: {
      desc: 'pick up an entity id',
    },
  },
};
