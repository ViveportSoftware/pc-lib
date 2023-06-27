import {Type} from './type';

export const Desc = {
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
