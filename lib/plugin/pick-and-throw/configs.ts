import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'pickable',
      type: 'json',
      schema: [
        {
          name: 'throwingForce',
          type: 'number',
          default: 10,
          desc: 'throwing force',
        },
      ],
    },
  ],
};
