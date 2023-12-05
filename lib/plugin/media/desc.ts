import {Type} from './type';

export const Desc = {
  [Type.Image]: {
    billboard: {
      desc: 'billboard',
    },
    linkHref: {
      desc: 'link href',
    },
    linkButtonText: {
      desc: 'link button text (8 words maximum)',
    },
  },
  [Type.Video]: {
    assetId: {
      desc: 'video asset',
    },
    projectionType: {
      desc: 'projection',
    },
    billboard: {
      desc: 'billboard',
    },
    controls: {
      desc: 'controls',
    },
    autoPlay: {
      desc: 'auto play',
    },
    loop: {
      desc: 'loop',
    },
    spatialSound: {
      desc: 'spatial sound',
    },
    linkHref: {
      desc: 'link href',
    },
    linkButtonText: {
      desc: 'link button text (8 words maximum)',
    },
  },
  [Type.Audio]: {
    assetId: {
      desc: 'audio asset',
    },
    controls: {
      desc: 'controls',
    },
    autoPlay: {
      desc: 'auto play',
    },
    loop: {
      desc: 'loop',
    },
    spatialSound: {
      desc: 'spatial sound',
    },
  },
  [Type.PolygonStreaming]: {
    // streamableModel attributes
    url: {
      desc: 'polygon streaming url',
    },
    qualityPriority: {
      desc: 'Quality priority',
    },
    useAlpha: {
      desc: 'Use Alpha',
    },
    useMetalRoughness: {
      desc: 'Use MetalRoughness',
    },
    castShadows: {
      desc: 'Cast shadows',
    },
    castLightmapShadows: {
      desc: 'Cast lightmap shadows',
    },
    receiveShadows: {
      desc: 'Receive shadows',
    },
    doubleSidedMaterials: {
      desc: 'Double sided materials',
    },
    environmentAssetId: {
      desc: 'Environment asset',
    },
    initialLOD: {
      desc: 'Initial LOD',
    },
  },
};
