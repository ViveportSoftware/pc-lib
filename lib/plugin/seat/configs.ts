import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'seat',
      type: 'json',
      schema: [
        {
          name: 'quantity',
          type: 'number',
          default: 1,
          desc: 'number of seats',
        },
        {
          name: 'hasHint',
          type: 'boolean',
          default: true,
          desc: 'show hint to take a seat',
        },
        {
          name: 'posture',
          type: 'number',
          select: true,
          default: 1,
          description: 'sitting posture',
        },
      ],
    },
  ],
};
