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
  [Type.InworldNpcSpeak]: {
    stringParams: [
      {
        desc: 'goals activation trigger',
      },
    ],
  },
};
