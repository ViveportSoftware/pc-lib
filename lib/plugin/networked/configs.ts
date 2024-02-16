import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'networked',
      type: 'json',
      schema: [
        {
          name: 'enabled',
          type: 'boolean',
          default: true,
          desc: 'enabled',
        },
      ],
    },
  ],
};
