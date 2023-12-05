import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'setting',
      type: 'json',
      schema: [
        {
          name: 'occlusionCulling',
          type: 'boolean',
          default: false,
        },
      ],
    },
  ],
};
