import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'minimap',
      type: 'json',
      schema: [
        {
          name: 'isEditingCaptureSettings',
          type: 'boolean',
          default: true,
        },
        {
          name: 'mapResolution',
          type: 'number',
          select: true,
          default: 512,
        },
        {
          name: 'center',
          type: 'vec2',
          default: [0, 0],
        },
        {
          name: 'clipHeight',
          type: 'number',
          default: 10,
        },

        {
          name: 'captureArea',
          type: 'number',
          default: 10,
        },
        {
          name: 'captureDepth',
          type: 'number',
          default: 100,
        },
        {
          name: 'mapAssetId',
          type: 'number',
          default: 0,
        },
        {
          name: 'isOrientingMapToCamera',
          type: 'boolean',
          default: false,
        },
        {
          name: 'zoom',
          type: 'number',
          default: 100,
        },
        {
          name: 'baseColor',
          type: 'number',
          default: [50, 50, 50],
        },
        {
          name: 'arrowAssetId',
          type: 'number',
          default: 0,
        },
        {
          name: 'coneAssetId',
          type: 'number',
          default: 0,
        },
        {
          name: 'frameAssetId',
          type: 'number',
          default: 0,
        },
        {
          name: 'maskAssetId',
          type: 'number',
          default: 0,
        },
      ],
    },
  ],
};
