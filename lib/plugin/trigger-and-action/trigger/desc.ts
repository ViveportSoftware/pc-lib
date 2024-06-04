import {Type} from './type';

export const Desc = {
  [Type.Base]: {
    sync: {
      default: true,
      desc: 'sync the trigger',
    },
    throttle: {
      default: 0,
      desc: 'throttle in ms',
    },
    actions: {
      default: [],
      array: true,
    },
  },
  [Type.PCAppEventSubscribe]: {
    stringParams: [
      {
        desc: 'notification name to subscribe',
      },
    ],
  },
  [Type.NotificationCenterSubscribe]: {
    stringParams: [
      {
        desc: 'notification name to subscribe',
      },
    ],
  },
  [Type.TheatreJSSubscribeSheetEnd]: {
    stringParams: [
      {
        desc: 'sheet name to subscribe',
      },
    ],
  },
  [Type.EntitySubscribeAnimationEvent]: {
    stringParams: [
      {
        desc: 'event name to subscribe',
      },
    ],
  },
  [Type.EntitySubscribeTriggerEnter]: {
    tagsFilter: [
      {
        desc: 'tags to filter',
      },
    ],
  },
  [Type.EntitySubscribeTriggerLeave]: {
    tagsFilter: [
      {
        desc: 'tags to filter',
      },
    ],
  },
  [Type.EntitySubscribeCollisionStart]: {
    tagsFilter: [
      {
        desc: 'tags to filter',
      },
    ],
  },
  [Type.EntitySubscribeCollisionEnd]: {
    tagsFilter: [
      {
        desc: 'tags to filter',
      },
    ],
  },
};
