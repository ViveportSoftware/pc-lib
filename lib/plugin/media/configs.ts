// streamableModel attributes
export const polygonStreamingConfigs = [
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

export const Configs = {
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
          default: false,
        },
        {
          name: 'autoPlay',
          type: 'boolean',
          default: false,
        },
        {
          name: 'loop',
          type: 'boolean',
          default: false,
        },
      ],
    },
  ],
};
