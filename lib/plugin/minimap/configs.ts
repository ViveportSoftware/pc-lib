import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'minimap',
      type: 'json',
      schema: [
        {
          name: 'mapTextureSize',
          type: 'number',
          select: true,
          default: 0,
        },
        {
          name: 'captureRange',
          type: 'number',
          default: 10,
        },
        {
          name: 'clipHeight',
          type: 'number',
          default: 2,
        },
        {
          name: 'textureId',
          type: 'number',
          default: 0,
        },
        {
          name: 'zoom',
          type: 'number',
          default: 1,
        },
        {
          name: 'isCrossSectionEnabled',
          type: 'boolean',
          default: false,
        },
      ],
    },
  ],
};
