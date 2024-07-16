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
      ],
    },
  ],
};
