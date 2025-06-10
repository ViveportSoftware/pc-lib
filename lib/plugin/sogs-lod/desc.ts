import {Type} from './type';

export const Desc = {
  [Type.Base]: {
    assetId: {
      desc: 'GLB container asset id',
    },
    sourceAssetId: {
      desc: 'GLB model source asset id',
    },
    minDistance:{
      desc: 'Minimum distance to switch to the source model',
    },
    distanceOffset:{
      desc: 'Distance offset to switch to the source model',
    },
  },
};
