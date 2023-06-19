import {Type} from './type';

export const Desc = {
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
};
