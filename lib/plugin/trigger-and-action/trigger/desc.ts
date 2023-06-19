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
};
