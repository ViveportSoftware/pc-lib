import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'sogsLoD',
      type: 'json',
      schema: [
        {
          name: 'assetId',
          type: 'number',
          desc: 'GLB container asset id',
        },
        {
          name: 'sourceAssetId',
          type: 'number',
          desc: 'GLB model source asset id',
        },
        {
          name: 'minDistance',
          type: 'number',
          desc: 'Minimum distance to switch to the source model',
          default: 8,
        },
        {
          name: 'distanceOffset',
          type: 'number',
          desc: 'Distance offset to switch to the source model',
          default: 2,
        },
      ],
    },
  ],
};
