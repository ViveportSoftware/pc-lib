import {Type} from './type';

export const Desc = {
  [Type.Base]: {
    quantity: {
      default: 1,
      desc: 'number of seats',
    },
    hasHint: {
      default: true,
      desc: 'show hint to take a seat',
    },
    posture: {
      default: 1,
      desc: 'sitting posture',
    },
  },
};
