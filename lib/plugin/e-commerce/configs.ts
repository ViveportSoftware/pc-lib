import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'e-commerce',
      type: 'json',
      schema: [
        {
          name: 'rotateY',
          type: 'number',
          default: 180,
          desc: 'rotate Y +/- max degree',
        },
        {
          name: 'rotateX',
          type: 'number',
          default: 90,
          desc: 'rotate X +/- max degree',
        },
      ],
    },
  ],
};
