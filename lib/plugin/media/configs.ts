import {ConfigsType, Schemas} from '../type';

// streamableModel attributes
export const polygonStreamingConfigs: Schemas = [
  {
    name: 'url',
    type: 'string',
    default: '',
  },
  {
    name: 'qualityPriority',
    type: 'number',
    default: 1,
  },
  {
    name: 'useAlpha',
    type: 'boolean',
    default: true,
  },
  {
    name: 'useMetalRoughness',
    type: 'boolean',
    default: true,
  },
  {
    name: 'castShadows',
    type: 'boolean',
    default: true,
  },
  {
    name: 'castLightmapShadows',
    type: 'boolean',
    default: true,
  },
  {
    name: 'receiveShadows',
    type: 'boolean',
    default: true,
  },
  {
    name: 'doubleSidedMaterials',
    type: 'boolean',
    default: false,
  },
  {
    name: 'environmentAssetId',
    type: 'number',
    default: 0,
  },
  {
    name: 'initialLOD',
    type: 'number',
    default: -1,
  },
];

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'media',
      type: 'json',
      schema: [
        ...polygonStreamingConfigs,
        {
          name: 'assetId',
          type: 'number',
          default: 0,
        },
        {
          name: 'billboard',
          type: 'boolean',
          default: false,
        },
        {
          name: 'linkHref',
          type: 'string',
          default: '',
        },
        {
          name: 'linkButtonText',
          type: 'string',
          default: '',
        },
        {
          name: 'controls',
          type: 'boolean',
          default: true,
        },
        {
          name: 'autoPlay',
          type: 'boolean',
          default: true,
        },
        {
          name: 'loop',
          type: 'boolean',
          default: true,
        },
        {
          name: 'spatialSound',
          type: 'boolean',
          default: true,
        },
        {
          name: 'projectionType',
          type: 'number',
          description: 'projection',
          select: true,
          default: 0,
        },
      ],
    },
  ],
};
