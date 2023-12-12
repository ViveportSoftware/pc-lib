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
      name: 'cameraType',
      type: 'string',
      default: 'nonPlayer',
      enum: CameraTypeEnum,
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
      default: 3000000,
    },
    {
      name: 'mobileTriangleBudget',
      type: 'number',
      default: 1000000,
    },
    {
      name: 'minimumDistance',
      type: 'number',
      default: 0.01,
    },
    {
      name: 'distanceFactor',
      type: 'number',
      default: 1.1,
    },
    {
      name: 'distanceType',
      type: 'string',
      default: 'boundingBoxCenter',
      enum: DistanceTypeEnum,
    },
    {
      name: 'maximumQuality',
      type: 'number',
      default: 15000,
    },
    {
      name: 'closeUpDistance',
      type: 'number',
      default: 3,
    },
    {
      name: 'closeUpDistanceFactor',
      type: 'number',
      default: 5,
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
    {
      name: 'streamController',
      type: 'json',
      schema: [...polygonStreamingConfigs.streamController],
    },
  ],
};
