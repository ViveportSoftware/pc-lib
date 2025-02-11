import {Type} from './type';

export const Desc = {
  [Type.Image]: {
    billboard: {
      desc: 'billboard',
    },
    modalDescription: {
      desc: 'dialog title', // count down dialog title
    },
    isOpenInNewTab: {
      desc: 'open link in new tab',
    },
    enableHoverBackgroundMask: {
      desc: 'enable hover background mask',
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
      desc: 'Polygon Streaming url',
    },
    qualityPriority: {
      desc: 'Quality Priority',
    },
    useAlpha: {
      desc: 'Use Alpha',
    },
    castShadows: {
      desc: 'Cast Shadows',
    },
    castLightmapShadows: {
      desc: 'Cast Lightmap Shadows',
    },
    receiveShadows: {
      desc: 'Receive Shadows',
    },
    doubleSidedMaterials: {
      desc: 'Force Double Sided Materials',
    },
    environmentAssetId: {
      desc: 'Environment Asset',
    },
    initialTrianglePercent: {
      desc: 'Initial Triangle Rercentage',
    },
    layers: {
      desc: 'layers to render',
    },
  },
};
