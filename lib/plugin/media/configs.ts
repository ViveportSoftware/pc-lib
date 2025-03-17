import {ConfigsType, Schemas} from '../type';

enum CameraTypeEnum {
  NonPlayer = 'nonPlayer',
  Player = 'player',
}

enum OcclusionGeometryEnum {
  BoundingBox = 'boundingBox',
  Mesh = 'mesh',
}

enum DistanceTypeEnum {
  BoundingBoxCenter = 'boundingBoxCenter',
  BoundingBox = 'boundingBox',
}

type polygonStreamingSchemas = {
  streamController: Schemas;
  streamableModel: Schemas;
};

export const polygonStreamingConfigs: polygonStreamingSchemas = {
  streamController: [
    {
      name: 'cameraEntityId',
      type: 'number',
      default: 0,
    },    
    {
      name: 'occlusionCulling',
      type: 'boolean',
      default: false,
    },
    {
      name: 'occlusionGeometry',
      type: 'string',
      default: 'boundingBox',
      enum: OcclusionGeometryEnum,
    },
    {
      name: 'occlusionQueryFrequency',
      type: 'number',
      default: 8,
    },
    {
      name: 'triangleBudget',
      type: 'number',
      default: 5000000,
    },
    {
      name: 'mobileTriangleBudget',
      type: 'number',
      default: 3000000,
    },
    {
      name: 'distanceFactor',
      type: 'number',
      default: 1.1,
    },
    {
      name: 'maximumQuality',
      type: 'number',
      default: 15000,
    },
    {
      name: 'maximumQuality',
      type: 'number',
      default: 15000,
    },
  ],
  streamableModel: [
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
      name: 'castShadows',
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
      name: 'initialTrianglePercent',
      type: 'number',
      default: 0.5,
    },
    {
      name: 'layers',
      type: 'number',
      array: true,
      default: [],
      layersPicker: true,
    },
  ],
};

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'media',
      type: 'json',
      schema: [
        ...polygonStreamingConfigs.streamableModel,
        {
          name: 'sourceType',
          type: 'number',
          select: true,
          default: 0,
        },
        {
          name: 'assetId',
          type: 'number',
          default: 0,
        },
        {
          name: 'url',
          type: 'string',
          default: '',
        },
        {
          name: 'billboard',
          type: 'boolean',
          default: false,
        },
        {
          name: 'modalDescription',
          type: 'string',
          default: '',
        },
        {
          name: 'isOpenInNewTab',
          type: 'boolean',
          default: false,
        },
        {
          name: 'enableHoverBackgroundMask',
          type: 'boolean',
          default: true,
        },
        {
          name: 'activationTime',
          type: 'unixEpochMs',
          default: '',
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
        {
          name: 'audioZone',
          type: 'boolean',
          default: false,
        },
        {
          name: 'audioZoneScale',
          type: 'vec3',
          default: [1, 1, 1],
        },
      ],
    },
    {
      name: 'streamController',
      type: 'json',
      schema: [...polygonStreamingConfigs.streamController],
    },
  ],
};
