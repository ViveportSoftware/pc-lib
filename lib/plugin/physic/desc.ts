import {Type} from './type';

export const Desc = {
  [Type.CustomRigidbody]: {
    isAutoScaleIgnored: {
      default: false,
      desc: 'ignored by camera auto-zoom',
    },
    isCollideOwner: {
      default: true,
      desc: 'collide with the room owner',
    },
    isCollideVisitor: {
      default: true,
      desc: 'collide with the visitor',
    },
    isCollideCursor: {
      default: true,
      desc: 'click through the rigidbody',
    },
  },
};
