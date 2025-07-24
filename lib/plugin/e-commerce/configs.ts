import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'ecommerce',
      type: 'json',
      schema: [
        {
          name: 'rotateY',
          type: 'number',
          default: 180,
        },
        {
          name: 'rotateX',
          type: 'number',
          default: 90,
        },
      ],
    },
  ],
};
