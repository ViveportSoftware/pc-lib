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
      desc: 'Polygon Streaming URL',
    },
    initialTrianglePercent: {
      desc: 'Initial Triangle Percentage',
    },
    castShadows: {
      desc: 'Cast Shadows',
    },
    receiveShadows: {
      desc: 'Receive Shadows',
    },
    doubleSidedMaterials: {
      desc: 'Force Double Sided Materials',
    },
    useAlpha: {
      desc: 'Use Alpha',
    },
    playAnimationAutomatically: {
      desc: 'Play Animation Automatically'
    },
    animation: {
      desc: 'Animation To Play'
    },
    animationStateMappings: {
      desc: 'Animation States',
      children: {
        state: {
          desc: 'State'
        },
        animation: {
          desc: 'Animation'
        },
        layer: {
          desc: 'Layer'
        }
      }
    },
    animationStateGraphId: {
      desc: 'Animation State Graph'
    },
    priorityLevel: {
      desc: 'Priority Level',
    },
    qualityPriority: {
      desc: 'Quality Priority',
    },
    environmentAssetId: {
      desc: 'Environment Asset',
    },
  },
};
