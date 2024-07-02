import {Type} from './type';

export const Desc = {
  [Type.Image]: {
    billboard: {
      desc: 'billboard',
    },
    modalDescription: {
      desc: 'model description (64 words maximum)',
    },
    isOpenInNewTab: {
      desc: 'open link in new tab',
    },
    activationTime: {
      desc: 'link activation time (UTC+0)',
    },
    linkHref: {
      desc: 'link href',
    },
    linkButtonText: {
      desc: 'link button text',
    },
  },
  [Type.Video]: {
    sourceType: {
      desc: 'video source',
    },
    assetId: {
      desc: 'asset',
    },
    url: {
      desc: 'url',
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
      desc: 'link button text',
    },
    audioZone: {
      desc: 'audio zone',
    },
    audioZoneScale: {
      desc: 'audio zone scale',
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
    audioZone: {
      desc: 'audio zone',
    },
    audioZoneScale: {
      desc: 'audio zone scale',
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
    initialTrianglePercent: {
      desc: 'Initial triangle percentage',
    },
    layers: {
      desc: 'layers to render',
    },
  },
};
