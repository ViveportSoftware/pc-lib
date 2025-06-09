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
      ],
    },
  ],
};
