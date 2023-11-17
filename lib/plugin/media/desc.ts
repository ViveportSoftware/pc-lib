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
    billboard: {
      desc: 'billboard',
    },
    linkHref: {
      desc: 'link href',
    },
    linkButtonText: {
      desc: 'link button text (8 words maximum)',
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
  },
  [Type.PolygonStreaming]: {
    url: {
      desc: 'polygon streaming url',
    },
    // TODO: streamController and streamableModel settings
  },
};
