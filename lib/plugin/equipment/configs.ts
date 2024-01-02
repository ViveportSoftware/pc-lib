import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'equipment',
      type: 'json',
      schema: [
        {
          name: 'stringParams',
          type: 'string',
          array: true,
        },
      ],
    },
  ],
};
