import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'physic',
      type: 'json',
      schema: [
        {
          name: 'isAutoScaleIgnored',
          type: 'boolean',
          default: false,
          desc: 'ignored by camera auto-zoom',
        },
        {
          name: 'isCollideOwner',
          type: 'boolean',
          default: true,
          desc: 'collide with the room owner',
        },
        {
          name: 'isCollideVisitor',
          type: 'boolean',
          default: true,
          desc: 'collide with the room visitor',
        },
        {
          name: 'isCollideCursor',
          type: 'boolean',
          default: false,
          desc: 'clcik through the rigidbody',
        },
      ],
    },
  ],
};
