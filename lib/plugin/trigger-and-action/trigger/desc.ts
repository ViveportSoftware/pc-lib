import {Type} from './type';

export const Desc = {
  [Type.PCAppEventSubscribe]: {
    sync: {
      desc: 'sync the trigger',
    },
    stringParams: [
      {
        desc: 'notification name to subscribe',
      },
    ],
  },
  [Type.NotificationCenterSubscribe]: {
    sync: {
      desc: 'sync the trigger',
    },
    stringParams: [
      {
        desc: 'notification name to subscribe',
      },
    ],
  },
  [Type.NotificationCenterSubscribeEntityPicking]: {
    sync: {
      desc: 'sync the trigger',
    },
  },
  [Type.EntitySubscribeTriggerEnter]: {
    sync: {
      desc: 'sync the trigger',
    },
    tagsFilter: [
      {
        desc: 'tags to filter',
      },
    ],
  },
  [Type.EntitySubscribeTriggerLeave]: {
    sync: {
      desc: 'sync the trigger',
    },
    tagsFilter: [
      {
        desc: 'tags to filter',
      },
    ],
  },
  [Type.EntitySubscribeCollisionStart]: {
    sync: {
      desc: 'sync the trigger',
    },
    tagsFilter: [
      {
        desc: 'tags to filter',
      },
    ],
  },
  [Type.EntitySubscribeCollisionEnd]: {
    sync: {
      desc: 'sync the trigger',
    },
    tagsFilter: [
      {
        desc: 'tags to filter',
      },
    ],
  },
};
